import Sidebar from "@/layouts/Sidebar";
import React from "react";

const Components = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full h-full p-4 m-8 overflow-y-auto">
          <div className="flex items-center justify-center p-40 border-4 border-dotted">
            Content...
          </div>
        </div>
      </div>
    </>
  );
};

export default Components;
