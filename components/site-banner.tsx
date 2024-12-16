"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
// import posthog from "posthog-js";

export function SiteBanner() {
  return (
    <div className="group relative z-50 top-0 bg-purple-600 py-3 text-white transition-all duration-300 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          href="https://premium.easyui.pro/"         
          target="_blank"
          className="inline-flex text-xs leading-normal md:text-sm"
        >
          ✨{" "}
          <span className="ml-1 font-[580] dark:font-[550]">
            {" "}
            Introducing Easy UI Premium - 100+ Blocks and Templates to build your landing page in minutes
          </span>{" "}
          <ChevronRight className="ml-1 mt-[3px] hidden size-4 transition-all duration-300 ease-out group-hover:translate-x-1 lg:inline-block" />
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  );
}