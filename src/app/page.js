"use client"
import CardsHome from "@/components/CardsHome/CardsHome";
import CarouselPage from "@/components/Carousel/CarouselPage";
import Heading from "@/components/Header/Heading";
import InteractiveIconCloud from "@/components/IconCloud/IconCloud";

export default function Home() {
  return (
    <>
      <Heading></Heading>
      <CarouselPage></CarouselPage>
      <CardsHome></CardsHome>
      <InteractiveIconCloud></InteractiveIconCloud>
    </>
  );
}
