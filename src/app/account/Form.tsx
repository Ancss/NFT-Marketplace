"use client";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NFTMarketplaceContext } from "@/Context/NFTMarketplaceContext";
import { UpdateAccount, existAccountByAccountAddress } from "@/actions/Account";
import { TResponseData } from "@/types";
import { useRouter } from "next/navigation";
import { AccountSchema } from "@/scheme";
import { z } from "zod";
import { AccountType } from "@/Context/AccountProvider";

// INTERNAL IMPORT

const Form = ({
  account,
  setAccount,
}: {
  account: AccountType;
  setAccount: Dispatch<SetStateAction<AccountType>>;
}) => {
  const { currentAccount, setError, setOpenError } = useContext(
    NFTMarketplaceContext
  )!;
  const router = useRouter();
  return (
    <div className={cn("w-full")}>
      <div>
        <form
          action={async () => {
            const res: TResponseData = await UpdateAccount({
              avatar: account.avatar,
              username: account.username,
              email: account.email,
              description: account.description,
              website: account.website,
              facebook: account.facebook,
              twitter: account.twitter,
              instagram: account.instagram,
              accountAddress: currentAccount!,
            });
            if (!res.success) {
              const error = JSON.parse(res.error as string);
              console.log(error);
              setError(error[0].message + " at " + error[0].path?.[0]);
              setOpenError(true);
              return;
            }
            console.log("res", res);
            router.replace("/");
          }}
        >
          <div className={cn("mt-8")}>
            <label
              htmlFor="name"
              className={cn("block w-full ml-4 font-bold text-xl")}
            >
              Username
            </label>
            <input
              type="text"
              placeholder="User"
              value={account.username!}
              onChange={(e) =>
                setAccount({ ...account, username: e.target.value })
              }
              className={cn(
                "w-full border border-icons p-4 rounded-xl bg-transparent mt-2 outline-none"
              )}
            />
          </div>

          <div className={cn("mt-8")}>
            <label
              htmlFor="email"
              className={cn("block w-full ml-4 font-bold text-xl")}
            >
              Email
            </label>
            <div
              className={cn(
                "w-full border border-icons rounded-xl flex items-center gap-4 overflow-hidden"
              )}
            >
              <div
                className={cn(
                  "text-2xl bg-icons p-2 px-4 text-main-bg grid cursor-pointer"
                )}
              >
                <HiOutlineMail />
              </div>
              <input
                type="text"
                placeholder="Email*"
                value={account.email!}
                onChange={(e) =>
                  setAccount({ ...account, email: e.target.value })
                }
                className={cn("w-[90%] bg-transparent border-0 outline-none")}
              />
            </div>
          </div>

          <div className={cn("mt-8")}>
            <label
              htmlFor="description"
              className={cn("block w-full ml-4 font-bold text-xl")}
            >
              Description
            </label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={6}
              value={account.description!}
              onChange={(e) =>
                setAccount({ ...account, description: e.target.value })
              }
              placeholder="something about yourself in few words"
              className={cn(
                "w-full bg-transparent outline-none rounded-xl p-4 border border-icons"
              )}
            ></textarea>
          </div>

          <div className={cn("mt-8")}>
            <label
              htmlFor="website"
              className={cn("block w-full ml-4 font-bold text-xl")}
            >
              Website
            </label>
            <div
              className={cn(
                "w-full border border-icons rounded-xl flex items-center gap-4 overflow-hidden"
              )}
            >
              <div
                className={cn(
                  "text-2xl bg-icons p-2 px-4 text-main-bg grid cursor-pointer"
                )}
              >
                <MdOutlineHttp className=" text-2xl" />
              </div>
              <input
                type="text"
                value={account.website!}
                onChange={(e) =>
                  setAccount({ ...account, website: e.target.value })
                }
                placeholder="website"
                className={cn("w-[90%] bg-transparent border-0 outline-none")}
              />
            </div>
          </div>

          <div className={cn("mt-8 grid gap-4")}>
            <div className={cn("w-full")}>
              <label
                htmlFor="facebook"
                className={cn("block w-full ml-4 font-bold text-xl")}
              >
                Facebook
              </label>
              <div
                className={cn(
                  "w-full border border-icons rounded-xl flex items-center gap-4 overflow-hidden"
                )}
              >
                <div
                  className={cn(
                    "text-2xl bg-icons p-2 px-4 text-main-bg grid cursor-pointer"
                  )}
                >
                  <TiSocialFacebook />
                </div>
                <input
                  type="text"
                  placeholder="http://shoaib"
                  value={account.facebook!}
                  onChange={(e) =>
                    setAccount({ ...account, facebook: e.target.value })
                  }
                  className={cn("w-[90%] bg-transparent border-0 outline-none")}
                />
              </div>
            </div>

            <div className={cn("w-full")}>
              <label
                htmlFor="Twitter"
                className={cn("block w-full ml-4 font-bold text-xl")}
              >
                Twitter
              </label>
              <div
                className={cn(
                  "w-full border border-icons rounded-xl flex items-center gap-4 overflow-hidden"
                )}
              >
                <div
                  className={cn(
                    "text-2xl bg-icons p-2 px-4 text-main-bg grid cursor-pointer"
                  )}
                >
                  <TiSocialTwitter />
                </div>
                <input
                  type="text"
                  value={account.twitter!}
                  onChange={(e) =>
                    setAccount({ ...account, twitter: e.target.value })
                  }
                  placeholder="http://shoaib"
                  className={cn("w-[90%] bg-transparent border-0 outline-none")}
                />
              </div>
            </div>

            <div className={cn("w-full")}>
              <label
                htmlFor="Instagram"
                className={cn("block w-full ml-4 font-bold text-xl")}
              >
                Instagram
              </label>
              <div
                className={cn(
                  "w-full border border-icons rounded-xl flex items-center gap-4 overflow-hidden"
                )}
              >
                <div
                  className={cn(
                    "text-2xl bg-icons p-2 px-4 text-main-bg grid cursor-pointer"
                  )}
                >
                  <TiSocialInstagram />
                </div>
                <input
                  type="text"
                  value={account.instagram!}
                  onChange={(e) =>
                    setAccount({ ...account, instagram: e.target.value })
                  }
                  placeholder="http://shoaib"
                  className={cn("w-[90%] bg-transparent border-0 outline-none")}
                />
              </div>
            </div>
          </div>

          <div className={cn("mt-8")}>
            <label
              htmlFor="wallet"
              className={cn("block w-full ml-4 font-bold text-xl")}
            >
              Wallet address
            </label>
            <div
              className={cn(
                "w-full border border-icons rounded-xl flex items-center gap-4 overflow-hidden"
              )}
            >
              <div
                className={cn(
                  "text-2xl bg-icons p-2 px-4 text-main-bg grid cursor-pointer"
                )}
              >
                <MdOutlineHttp className=" text-2xl" />
              </div>
              <input
                type="text"
                placeholder={currentAccount!}
                disabled
                className={cn("w-[85%] bg-transparent border-0 outline-none")}
              />
              <div
                className={cn(
                  "text-2xl bg-icons p-2 px-4 text-main-bg grid cursor-pointer"
                )}
                onClick={() => navigator.clipboard.writeText(currentAccount!)}
              >
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className={cn("my-16")}>
            <Button className={cn("w-full flex justify-center text-xl")}>
              Update profile
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
