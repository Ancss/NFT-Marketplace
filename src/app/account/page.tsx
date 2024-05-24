"use client";
import React, { useState, useCallback, useContext, useEffect } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import images from "@/img";
import Form from "./Form";

import { AccountContext } from "@/Context/AccountProvider";
const Account = () => {
  const { account, setAccount } = useContext(AccountContext)!;

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setAccount({
        ...account,
        avatar: reader.result as string,
      });
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { image: ["*"] },
    maxSize: 5000000,
  });

  return (
    <div className={cn("w-full my-24")}>
      <div
        className={cn("xl:w-2/3 w-full mx-auto border-b border-shadow-dark")}
      >
        <h1 className={cn("text-4xl leading-[0.5]")}>Profile settings</h1>
        <p className={cn("text-xl mt-2 w-4/5tt leading-loose pb-2")}>
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>
      </div>

      <div
        className={cn(
          "xl:w-2/3 w-full mx-auto grid xl:grid-cols-[1fr_5fr] gap-12 mt-12 items-start grid-cols-1"
        )}
      >
        <div
          className={cn("mt-8 cursor-pointer relative text-center")}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <Image
            src={account.avatar || images.user1}
            alt="account upload"
            width={150}
            height={150}
            className={cn("rounded-full mx-auto")}
          />
          <p
            className={cn(
              "text-base font-bold leading-none whitespace-nowrap mt-2"
            )}
          >
            Change Image
          </p>
        </div>
        <div>
          <Form account={account} setAccount={setAccount} />
        </div>
      </div>
    </div>
  );
};

export default Account;
