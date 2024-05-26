import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { LikeOrDislike, getLikes } from "@/actions/NFT";
import { cn } from "@/lib/utils";
import { TLike } from "@/types";
import { memo, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const Like = memo(
  function Like({ nFTTokenId }: { nFTTokenId: string }) {
    const {
      checkIfWalletConnected,
      currentAccount,
      nfts,
      setNfts,
      likes,
      setLikes,
    } = useContext(NFTMarketplaceContext)!;

    const [nftLikes, setNftLikes] = useState<TLike[]>([])
    useEffect(() => {
      const nftLikes = likes.filter(
        (item) =>
          item[0] &&
          item.some(
            (subItem) => {
              console.log(subItem.nFTTokenId == nFTTokenId && subItem.liked == '1')
              return subItem.nFTTokenId == nFTTokenId && subItem.liked == '1'
            }
          )
      )[0]
      setNftLikes(nftLikes)
    })
    const likeNft = useCallback(() => {
      if (currentAccount) {
        LikeOrDislike({ tokenId: nFTTokenId, accountAddress: currentAccount });
        getLikes({ tokenId: nFTTokenId }).then(res => {
          console.log(res.data,nftLikes)
          setNftLikes(res.data)
        })

      }
    }, [currentAccount]);
    return (
      <div
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          likeNft();
        }}
        className={cn(
          "bg-icons hover:bg-icons rounded-full m-4 px-2 py-1 text-main-bg flex items-center gap-2 text-xl"
        )}
      >
        {" "}
        <div className=" w-full flex items-center justify-center gap-2 relative z-[10]">
          {" "}
          {nftLikes?.findIndex(
            (item) => item.accountAddress === currentAccount
          ) > -1 ? (
            <AiFillHeart />
          ) : (
            <AiOutlineHeart />
          )}{" "}
          {nftLikes?.length || 0}{" "}
        </div>{" "}
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.nFTTokenId === nextProps.nFTTokenId;
  }
);
