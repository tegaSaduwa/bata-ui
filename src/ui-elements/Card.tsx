import React, { ReactNode } from "react";

type IComponents = {
  img: ReactNode;
  title: ReactNode;
  description: ReactNode;
};

const Card = (props: IComponents) => {
  return (
    <a href="#" className="">
    <div className="pl-2 pr-5 py-5 mr-5  sm:w-full ">
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 hover:bg-gray-200">
        <img
          className="w-full rounded-lg"
          src={`${props.img}`}
          alt="component img"
        />
        <div className="p-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
      </div>
    </div>
    </a>
  );
};

export default Card;
