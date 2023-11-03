import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
function Login() {
  return (
    <div className="w-[50%] border-red-800 border-5 flex ">
      <div className="w-full">
        <h2 className="text-2xl font-bold	mb-3	">Sign In</h2>
        <p className="text-base mb-8	">Please fill your information below</p>

        <div class="relative">
          <input
            type="text"
            id="name"
            class="w-full py-2 pl-10 pr-3 border rounded-md border-red-300 outline-none"
            placeholder="Email"
          />
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <AiOutlineMail />
          </span>
        </div>

        <div class="relative my-5">
          <input
            type="password"
            id="name"
            class="w-full py-2 pl-10 pr-3 border rounded-md border-red-300 outline-none"
            placeholder="Password"
          />
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <RiLockPasswordLine />
          </span>
        </div>
        <hr className="my-7" />
        <div className="flex justify-between">
          <p className="text-sm">Don't have an account? </p>
          <Link href="/auth/signup" className="text-sm font-bold">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
