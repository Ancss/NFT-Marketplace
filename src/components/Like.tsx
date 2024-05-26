import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { LikeOrDislike } from "@/actions/NFT";
import { cn } from "@/lib/utils";
import { useContext, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const Like = ({
  nFTTokenId
}: {
  nFTTokenId: string
}) => {
  const { checkIfWalletConnected, currentAccount, nfts, setNfts, likes } = useContext(
    NFTMarketplaceContext
  )!;
  const [nftLikes, setNftLikes] = useState(likes.filter(item => item.nFTTokenId === nFTTokenId))
  const likeNft = () => {
    if (currentAccount) {
      LikeOrDislike({
        tokenId: nFTTokenId,
        accountAddress: currentAccount
      })
    }
  };
  return <div
    onClick={() => likeNft()}
    className=" w-full flex items-center justify-center gap-2"
  >
    {nftLikes?.findIndex(item => item.accountAddress === currentAccount) ? (
      <AiOutlineHeart />
    ) : (
      <AiFillHeart className={cn("text-main-bg")} />
    )}
    {nftLikes?.length || 0}
  </div>
}