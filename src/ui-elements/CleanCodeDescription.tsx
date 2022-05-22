import React from "react";

const SecondHeroSection = () => {
  return (
    <div className="hero-content px-4 text-center md:px-0">
      <h2 className="mt-32 mb-2 text-4xl font-extrabold md:text-6xl">
        Clean HTML
      </h2>{" "}
      <h3 className="mb-5 text-3xl font-bold">with component classNamees</h3>{" "}
      <p className="mx-auto mb-5 w-full max-w-lg">
        Don't reinvent the wheel! <br />
        daisyUI adds classNamees to Tailwind CSS for all common UI components.
        classNamees like <span className="badge badge-outline">btn</span>,{" "}
        <span className="badge badge-outline">card</span>, etc. This allows us
        to focus on important things instead of making basic elements for every
        project.
      </p>{" "}
      <p className="mx-auto mt-20 w-full max-w-lg"></p>{" "}
      <div className="font-bold">Creating a button</div> using only utility
      classNamees vs using daisyUI component classNamees <p></p>{" "}
      <div className="mt-6 mb-10 flex w-full justify-center">
        <a href="/components" className="btn btn-primary btn-wide">
          See All Components
        </a>
      </div>
    </div>
  );
};

export default SecondHeroSection;
