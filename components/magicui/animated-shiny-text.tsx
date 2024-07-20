// import { cn } from "@/lib/utils";
// import { CSSProperties, FC, ReactNode } from "react";

// interface AnimatedShinyTextProps {
//   children: ReactNode;
//   className?: string;
//   shimmerWidth?: number;
// }

// const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
//   children,
//   className,
//   shimmerWidth = 100,
// }) => {
//   return (
//     <p
//       style={
//         {
//           "--shimmer-width": `${shimmerWidth}px`,
//         } as CSSProperties
//       }
//       className={cn(
//         "mx-auto max-w-md text-neutral-600/50 dark:text-neutral-400/50 ",

//         // Shimmer effect
//         "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

//         // Shimmer gradient
//         "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",

//         className,
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// export default AnimatedShinyText;



import { cn } from "@/lib/utils";
// import AnimatedGradientText from "@/registry/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import AnimatedGradientText from "./animated-gradient-text";

export default function AnimatedGradientTextDemo() {
  return (
    // <div className="z-10 flex min-h-[16rem] items-center justify-center">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Introducing Magic UI
          
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    // </div>
  );
}