import React from "react";

const ComponentsHeader = () => {
  return (
    <section className="flex justify-between">
      <input
        type="search"
        placeholder="search..."
        className="px-2 text-xl w-64 outline-none text-dark font-normal border-gray-700"
      />
      <div className=" ">
        <a
          href="#"
          className="mr-7 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          themes
        </a>
        <a
          href="#"
          className="text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          github
        </a>
      </div>
    </section>
  );
};

export default ComponentsHeader;
