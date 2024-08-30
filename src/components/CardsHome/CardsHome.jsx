import { useTheme } from "next-themes";
import { BiPlug } from "react-icons/bi";
import { CgArrowTopRightR } from "react-icons/cg";
import { FaCreativeCommonsBy } from "react-icons/fa";
import { GrTarget } from "react-icons/gr";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { PiFastForwardBold } from "react-icons/pi";
import { MagicCard } from "../magicui/magic-card";


export default function CardsHome() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-xl md:text-4xl font-medium mb-6 md:mb-8">Chat Smarter, Now Harder <br /> with Cognitgem</h1>
      <div
        className={
          "grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  lg:flex-row"
        }
      >
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl px-7 py-6 md:py-12"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">Ask anything</h3>
              <p className="text-xs md:text-sm font-extralight">Lets users quickly find answers to their questions without having to search through multiple sources.</p>
            </div>
            <div>
            <MdOutlineChatBubbleOutline className="text-[#9b5cf4] text-3xl md:text-4xl"/>
            </div>
          </div>
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl px-7 py-6 md:py-12"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">Improve everyday</h3>
              <p className="text-xs md:text-sm font-extralight">The app understands user queries and provide accurate responses.</p>
            </div>
            <div>
            <GrTarget className="text-[#f9c46e] text-3xl md:text-4xl"/>
            </div>
          </div>
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl px-7 py-6 md:py-12"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">Connect everywhere</h3>
              <p className="text-xs md:text-sm font-extralight">Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.</p>
            </div>
            <div>
              <BiPlug className="text-[#6ed26e] text-3xl md:text-4xl"/>
            </div>
          </div>
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl px-7 py-6 md:py-12"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">Fast responding</h3>
              <p className="text-xs md:text-sm font-extralight">Lets users quickly find answers to their questions without having to search through multiple sources.</p>
            </div>
            <div>
              <PiFastForwardBold className="text-[#ff6968] text-3xl md:text-4xl"/>
            </div>
          </div>
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl px-7 py-6 md:py-12"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">Personalize experience</h3>
              <p className="text-xs md:text-sm font-extralight">The app makes every interaction more relevant and tailored just for you.</p>
            </div>
            <div>
              <CgArrowTopRightR className="text-[#cb3ad0] text-3xl md:text-4xl"/>
            </div>
          </div>
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl px-7 py-6 md:py-12"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">
              Enhance communication</h3>
              <p className="text-xs md:text-sm font-extralight">Facilitate seamless communication with the AI chatbot, providing quick and accurate responses</p>
            </div>
            <div>
              <FaCreativeCommonsBy className="text-[#e23367] text-3xl md:text-4xl"/>
            </div>
          </div>
        </MagicCard>
      </div>
    </div>
  );
}
