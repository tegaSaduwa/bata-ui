import ComponentsHeader from "@/layouts/ComponentsHeader";
import ComponentUse from "@/ui-elements/PreviewComponent";
import React, { ReactNode, useState, useEffect } from "react";
import { componentPreview, componentsProperties } from "../utils/mockdata";

type IComponentsLayout = {
  heading: ReactNode;
  // title: ReactNode;
  // description: ReactNode;
  // href: ReactNode;
};

const ComponentsLayout = (props: IComponentsLayout) => {
  const [previewdata, setpreviewdata] = useState([]);
  const [cproperties, setCproperties] = useState([]);

  useEffect(() => {
    setpreviewdata(componentPreview);
    setCproperties(componentsProperties);
  }, []);

  return (
    <div className="w-full h-screen overflow-scroll">
      <div className="p-9">
       <ComponentsHeader />

        <div className="flex items-center">
          <br></br>
          <h1 className="px-2 py-5 text-4xl text-dark font-bold">
            {props.heading}
          </h1>
        </div>

        <div className="pl-2">
          <p className="text-normal text-gray-700">description</p>
          <table className="table-auto mt-5">
            <thead className="shadow-sm bg-white">
              <tr>
                <th className="bg-gray-50 border text-left px-7 py-3">
                  Class Name
                </th>
                <th className="bg-gray-50 border text-left px-7 py-3">Type</th>
                <th className="bg-gray-50 border text-left px-7 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {cproperties?.map((property: any) => (
                <tr>
                  <td className="border px-7 py-3"> {property.className}</td>
                  <td className="border px-7 py-3">
                    <span className="rounded-lg border-gray-200 bg-orange-500 text-white px-3 py-1">
                      {property.type}
                    </span>
                  </td>
                  <td className="border px-7 py-3">{property.des}</td>
                </tr>
              ))}
            </tbody>
          </table>
          ​
          <div className="mt-5">
            {previewdata?.map((property: any) => (
              <ComponentUse
                heading={property.previewHeading}
                preview={property.previewImg}
                code={property.previewCode}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsLayout;
