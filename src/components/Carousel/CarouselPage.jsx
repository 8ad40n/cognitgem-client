import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import ShineBorder from "../magicui/shine-border";

export default function CarouselPage() {
  const content = [
    {
      img: "/assets/images/c1.jpg",
    },
    {
      img: "/assets/images/c3.jpg",
    },
    {
      img: "/assets/images/c2.jpg",
    },
  ];

  return (
    <Carousel className="w-full max-w-[70vw] md:max-w-xl mx-auto">
      <CarouselContent>
        {content.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <ShineBorder
                className="relative flex  aspect-square items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl mx-auto"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <CardContent className="relative w-full aspect-square">
                  <Image
                    src={item.img}
                    alt={`Image ${index + 1}`}
                    layout="fill"
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </CardContent>
              </ShineBorder>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
