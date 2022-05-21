import SecondHeroSection from "@/ui/CleanCodeDescription";
import HighlyCustomizableDescription from "@/ui/HighlyCustomizableDescription";
import InstallBataUIDescription from "@/ui/InstallBataUIDescription";
import React from "react";
import Stroke from "../layouts/Stroke";

const HeroSection = () => {
  return (
    <div>
      {" "}
      <div className="lg:px-9 bg-gradient-to-br text-white from-indigo-900 via-purple-500 to-pink-300 text-primary-content -mt-[4rem] grid place-items-center items-end pt-20">
        <div className="lg:px-20 pt-5 hero-content col-start-1 row-start-1 w-full max-w-7xl flex-col justify-between gap-10 pb-40 lg:flex-row lg:items-end lg:gap-0 xl:gap-20">
          <div className="lg:pl-10 lg:pb-32">
            <div className="mb-2 py-4 text-center lg:py-10 lg:text-left antialiased">
              <h1 className="font-title mb-2 text-4xl font-bold sm:text-5xl lg:text-10xl font-roboto">
                bata-ui
              </h1>{" "}
              <h2 className="font-title text-lg font-semibold sm:text-2xl lg:text-3xl">
                The most popular, free and open-source <br />
                Tailwind CSS component library
              </h2>
            </div>{" "}
            <div className="flex w-full flex-col items-center space-y-10 lg:flex-row lg:items-start lg:space-x-4 lg:space-y-0">
              <div className="my-2 flex max-w-sm flex-col gap-2 text-left">
                <div className="flex gap-2">
                  <Stroke />A plugin for Tailwind CSS
                </div>{" "}
                <div className="flex gap-2">
                  <Stroke />
                  Faster development
                </div>{" "}
                <div className="flex gap-2">
                  <Stroke />
                  Cleaner HTML
                </div>{" "}
                <div className="flex gap-2">
                  <Stroke />
                  Customizable and themeable
                </div>{" "}
                <div className="flex gap-2">
                  <Stroke />
                  Pure CSS. Works on all frameworks
                </div>
              </div>{" "}
              <div className="rounded-md border-base-content w-full max-w-xs flex-1 border-2 border-opacity-90 bg-transparent pb-6 text-left text-current lg:mx-0">
                <span> $ npm i bata-ui</span>
              </div>
            </div>{" "}
            <div className="mt-4 flex flex-1 justify-center space-x-2 lg:mt-6 lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="/components"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-indigo-400 md:py-4 md:text-lg md:px-10"
                >
                  See Components
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  How to use
                </a>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </div>

      <SecondHeroSection />
      <HighlyCustomizableDescription />
      <InstallBataUIDescription />
    </div>
  );
};

export default HeroSection;
