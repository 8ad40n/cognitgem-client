import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";
import potraitHome from "../../../public/assets/images/HomePotrait.jpg";

export default function GenerativeHome() {
  return (
    <div className="container mx-auto mb-10 md:mb-20">
      <h1 className="text-center text-2xl md:text-4xl font-medium mb-2 md:mb-4">
        Generative AI made for creators.
      </h1>
      <p className="text-xs md:text-sm font-extralight text-center mb-1">
        Cognitgem unlocks the potential of AI-powered applications
      </p>
      <div className="lg:flex lg:justify-center lg:gap-24 lg:items-center">
        <div>
          <Image className="w-[75vw] lg:w-[35vw] lg:pt-12 mx-auto rounded-2xl" src={potraitHome} alt="potraitHome"></Image>
        </div>
        <div>
          <h3 className="text-lg text-center lg:text-start md:text-3xl font-medium lg:w-[25vw] mb-3 md:mb-5">
            Smartest AI
          </h3>
          <div className="flex gap-2 items-center mb-2 md:mb-3 justify-center lg:justify-start">
            <IoCheckmark className="text-center rounded-full bg-[#9b71e4] p-1 text-black text-lg" />
            <p className="font-light text-sm md:text-base">
              Text generating
            </p>
          </div>
          <div className="flex gap-2 items-center mb-2 md:mb-3 justify-center lg:justify-start">
            <IoCheckmark className="text-center rounded-full bg-[#9b71e4] p-1 text-black text-lg" />
            <p className="font-light text-sm md:text-base">
              Quality enhancement
            </p>
          </div>
          <div className="flex gap-2 items-center mb-2 md:mb-3 justify-center lg:justify-start">
            <IoCheckmark className="text-center rounded-full bg-[#9b71e4] p-1 text-black text-lg" />
            <p className="font-light text-sm md:text-base">
              Seamless integration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
