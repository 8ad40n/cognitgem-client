"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  const handleSocial = async (provider) => {
    
    const res = await signIn(provider, {
      redirect: true,
      callbackUrl: path ? path : "/",
    });
  };
  return (
    <div className="container my-2 mx-auto h-[75vh] flex justify-center items-center">
      <div className="px-6 py-10 shadow-2xl rounded-2xl border">
        <div className="flex justify-center mb-4">
          <Image
            src="/assets/images/icon.png"
            width={50}
            height={50}
            alt="Logo"
          ></Image>
        </div>
        <h1 className="text-center font-medium text-lg md:text-xl mb-10">
          Welcome to{" "}
          <span className="text-lg md:text-xl font-medium">
            Cognit<span className="text-purple-600 ">Gem</span>
          </span>
        </h1>
        <h1 className="text-center text-lg mb-6 font-normal">Please, Login</h1>
        <button
          onClick={() => handleSocial("google")}
          className="flex justify-center items-center gap-2 px-3 py-2 bg-white rounded-lg text-black w-[75vw] md:w-80 mx-auto mb-2"
        >
          <FcGoogle className="text-lg" />
          Login with Google
        </button>
        <button
          onClick={() => handleSocial("github")}
          className="flex justify-center items-center gap-2 px-3 py-2 bg-white rounded-lg text-black w-[75vw] md:w-80 mx-auto"
        >
          <FaGithub className="text-lg" />
          Login with Github
        </button>
      </div>
    </div>
  );
}
