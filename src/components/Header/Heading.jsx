"use client";

import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import DotPattern from "../magicui/dot-pattern";
import SparklesText from "../magicui/sparkles-text";


export default function Heading() {
  return (
    <div className="container relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <div className="z-10 whitespace-pre-wrap text-center text-4xl md:text-6xl font-semibold tracking-tighter text-black dark:text-white w-[85vw] lg:w-[50vw]">
        Explore the possibilities of AI chatting with{" "}
        <SparklesText text="Cognitgem" />
      </div>
      <p className="mt-6 text-center w-[75vw] lg:w-[40vw] font-light">
        Unleash the power of AI within Congnitgem. Upgrade your productivity
        with Cognitgem, the AI chat app.
      </p>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      {/* button */}
      <div className="z-10 flex mt-5 lg:mt-8 items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center text-white px-4 py-1 md:py-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing Cognitgem</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
    </div>
  );
}
