import React from "react";
import { cn } from "@/lib/utils";
import LoginAndSignUp from "@/components/loginAndSignUp";

const login = () => {
  return (
    <div className={cn("w-full my-20")}>
      <div className={cn("w-1/3 mx-auto lg:w-11/12tt")}>
        <h1 className={cn("text-center text-3xl mb-20")}>Login</h1>
        <LoginAndSignUp />
        <p className={cn("text-center mt-12 font-bold")}>
          New user? <a href="#" className={cn("font-medium ml-4")}>Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default login;
