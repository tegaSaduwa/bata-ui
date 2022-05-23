import Sidebar from "@/layouts/Sidebar";
import Card from "@/ui-elements/Card";
import React, { useEffect, useState } from "react";
import { data } from "../utils/mockdata";

const Components = () => {
  const [mockdata, setMockdata] = useState([]);
  useEffect(() => {
    setMockdata(data);
  }, []);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full h-screen overflow-scroll">
          <div className="p-9">
          <input
            type="search"
            placeholder="search..."
            className="px-2 text-xl w-64 outline-none text-dark font-normal border-gray-700"
          />

          <div className="flex items-center">
            <br></br>
            <h1 className="px-2 py-5 text-4xl text-dark font-extrabold">
              All Components
            </h1>
          </div>

       
            <div className={`grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4`}>
              {mockdata.map(({ title, description, img, id }) => (
                <Card img={img} title={title} description={description} key={id} />
              ))}
           
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Components;
