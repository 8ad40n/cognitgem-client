import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="container m-10 mx-auto">
      <h1 className="text-center">Please, Login</h1>
      <div className="flex justify-center items-center gap-2 px-3 py-2 bg-white rounded-lg text-black w-[75vw] md:w-80 mx-auto mb-2">
        <FcGoogle className="text-lg"/>
        Login with Google
      </div>
      <div className="flex justify-center items-center gap-2 px-3 py-2 bg-white rounded-lg text-black w-[75vw] md:w-80 mx-auto">
        <FaGithub className="text-lg"/>
        Login with Github
      </div>
    </div>
  );
}
