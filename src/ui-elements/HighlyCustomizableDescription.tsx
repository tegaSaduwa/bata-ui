import React from "react";

const HighlyCustomizableDescription = () => {
  return (
    <div>
      <div className="hero bg-indigo-200 text-white-content min-h-screen pt-5">
        <div className="hero-content mx-auto max-w-md text-center md:max-w-full">
          <div>
            <h2 className="mt-32 mb-2 text-4xl font-extrabold md:text-6xl">
              Highly customizable
            </h2>{" "}
            <h3 className="mb-5 text-3xl font-bold">
              Powered by Tailwind CSS utility classNamees
            </h3>{" "}
            <p className="mx-auto mb-5 max-w-lg">
              daisyUI components have low CSS specificity so you can customize
              everything using Tailwind CSS utility classNamees.
              <br /> You can even{" "}
              <a href="/docs/customize" className="link">
                use @apply
              </a>{" "}
              to add your custom styles to components or you can{" "}
              <a href="/docs/themes" className="link">
                change colors and other design decisions
              </a>{" "}
              using CSS variables.
            </p>{" "}
            <div className="my-20 flex flex-col">
              <div className="mockup-code bg-neutral-focus mx-auto w-full max-w-xs text-left shadow-lg sm:max-w-none">
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlyCustomizableDescription;
