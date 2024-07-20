import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight, HeartHandshake } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta">
      <div className="py-10">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden p-14">
          <div className="z-10 mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
            <HeartHandshake className="mx-auto size-16 text-black dark:text-white lg:size-24" />
          </div>
          <div className="z-10 mt-4 flex flex-col items-center text-center text-black dark:text-white">
            <h1 className="text-3xl font-bold lg:text-4xl">
              Looking for MVP instead?
            </h1>
            <p className="mt-2">Check Out Easy MVP</p>
            <a
              href="https://mvp.easyui.pro/"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                }),
                "group mt-4 rounded-[2rem] px-6",
              )}
            >
              Check Out Easy MVP
              <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </a>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black" />
        </div>
      </div>
    </section>
  );
}