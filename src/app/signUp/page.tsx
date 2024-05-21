import LoginAndSignUp from "@/components/loginAndSignUp";
import React from "react";

//INTERNAL IMPORT

const signUp = () => {
  return (
    <div >
      <div >
        <h1>SignUp</h1>
        <LoginAndSignUp />
        <p >
          New user? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default signUp;
