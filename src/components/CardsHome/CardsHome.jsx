import { useTheme } from "next-themes";
import { MagicCard } from "../magicui/magic-card";

export default function CardsHome() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto">
      <div
        className={
          "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
        }
      >
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Magic
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Card
        </MagicCard>
      </div>
    </div>
  );
}
