import React, { ReactNode } from "react";

type IComponentsLayount = {
  heading: ReactNode;
  // title: ReactNode;
  // description: ReactNode;
  // href: ReactNode;
};

const ComponentsLayout = (props: IComponentsLayount) => {
  return (
    <div className="w-full h-screen overflow-scroll">
      <div className="p-9">
        <input
          type="search"
          placeholder="search..."
          className="px-2 text-xl w-64 outline-none text-dark font-normal border-gray-700"
        />

        <div className="flex items-center">
          <br></br>
          <h1 className="px-2 py-5 text-4xl text-dark font-bold">
            {props.heading}
          </h1>
        </div>

        <div className="pl-2">
          <p className="text-normal text-gray-700">description</p>
          <table className="table-auto mt-5">
            <thead className="shadow-sm bg-white ">
              <tr>
                <th className="bg-gray-50 border text-left px-4 py-2">Class Name</th>
                <th className="bg-gray-50 border text-left px-4 py-2">Type</th>
                <th className="bg-gray-50 border text-left px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2"> avatar</td>
                <td className="border px-4 py-2"><span className="border-gray-200 ">component</span></td>
                <td className="border px-4 py-2">Container element</td>
              </tr>
              <tr>
              <td className="border px-4 py-2"> avatar</td>
                <td className="border px-4 py-2"><span className="rounded-sm bg-slate-50">component</span></td>
                <td className="border px-4 py-2">Container element</td>
              </tr>
              <tr>
              <td className="border px-4 py-2"> avatar</td>
                <td className="border px-4 py-2"><span className="rounded-sm bg-slate-50">component</span></td>
                <td className="border px-4 py-2">Container element</td>
              </tr>
            </tbody>
          </table>
          ​
        </div>
      </div>
    </div>
  );
};

export default ComponentsLayout;
