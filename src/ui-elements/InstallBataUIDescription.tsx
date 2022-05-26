import React from "react";

const InstallBataUIDescription = () => {
  return (
    <div>
      <div className="hero bg-white text-white-content min-h-screen pt-5">
        <div className="hero-content mx-auto max-w-md text-center md:max-w-full">
          <div>
            <h2 className="mt-32 mb-2 text-4xl font-extrabold md:text-6xl">
              Install bata-ui
            </h2>{" "}
            <h3 className="mb-5 text-3xl font-bold">
              Powered by Tailwind CSS utility classNamees
            </h3>{" "}
            <div className="my-20 flex flex-col text-center">
              <div className="mx-96 code-section bg-slate-500 rounded-lg  text-stone-200">
                <div className="component-element p-5 ">npm i bata-ui</div>
              </div>
            </div>
            <div className="my-20 flex flex-col text-center">
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-100 bg-indigo-700 hover:bg-indigo-300 md:py-4 md:text-lg md:px-10"
                >
                  Install Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallBataUIDescription;
