import IconCloud from "@/components/magicui/icon-cloud";
import { IoCheckmark } from "react-icons/io5";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
export default function InteractiveIconCloud() {
  return (
    <div className="container mx-auto mb-10 md:mb-20 lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col-reverse lg:px-32">
      <div>
        <h3 className="text-xl text-center lg:text-start md:text-5xl font-medium lg:w-[25vw] mb-4 md:mb-6">
          AI chat app for seamless collaboration
        </h3>
        <div className="flex gap-2 items-center mb-2 md:mb-3 justify-center lg:justify-start">
          <IoCheckmark className="text-center rounded-full bg-[#9b71e4] p-1 text-black text-lg" />
          <p className="font-light text-sm md:text-base">Seamless Integration</p>
        </div>
        <div className="flex gap-2 items-center mb-2 md:mb-3 justify-center lg:justify-start">
          <IoCheckmark className="text-center rounded-full bg-[#9b71e4] p-1 text-black text-lg" />
          <p className="font-light text-sm md:text-base">Smart Automation</p>
        </div>
        <div className="flex gap-2 items-center mb-2 md:mb-3 justify-center lg:justify-start">
          <IoCheckmark className="text-center rounded-full bg-[#9b71e4] p-1 text-black text-lg" />
          <p className="font-light text-sm md:text-base">Top-notch Security</p>
        </div>
      </div>
      <div>
        <div className="mx-auto relative flex items-center justify-center overflow-hidden rounded-lg bg-background mb-10">
          <IconCloud iconSlugs={slugs} key={slugs} />
        </div>
      </div>
    </div>
  );
}
