"use client"
import CardsHome from "@/components/CardsHome/CardsHome";
import CarouselPage from "@/components/Carousel/CarouselPage";
import Heading from "@/components/Header/Heading";

export default function Home() {
  return (
    <>
      <Heading></Heading>
      <CarouselPage></CarouselPage>
      <CardsHome></CardsHome>
    </>
  );
}
