"use client"
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const handleSocial = async(provider) =>{
    const res = await signIn(provider);
  }
  return (
    <div className="container m-10 mx-auto">
      <h1 className="text-center">Please, Login</h1>
      <button onClick={()=> handleSocial("google")} className="flex justify-center items-center gap-2 px-3 py-2 bg-white rounded-lg text-black w-[75vw] md:w-80 mx-auto mb-2">
        <FcGoogle className="text-lg"/>
        Login with Google
      </button>
      <button onClick={()=> handleSocial("github")} className="flex justify-center items-center gap-2 px-3 py-2 bg-white rounded-lg text-black w-[75vw] md:w-80 mx-auto">
        <FaGithub className="text-lg"/>
        Login with Github
      </button>
    </div>
  );
}
