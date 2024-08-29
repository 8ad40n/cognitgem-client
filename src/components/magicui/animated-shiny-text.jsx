import { cn } from "@/lib/utils";

const AnimatedShinyText = ({ children, className, shimmerWidth = 100 }) => {
  return (
    <p
      className={cn(
        "mx-auto max-w-md text-transparent bg-clip-text",
        "animate-shimmer bg-gradient-to-r from-transparent via-neutral-400 to-transparent",
        className
      )}
    >
      {children}
    </p>
  );
};

export default AnimatedShinyText;
