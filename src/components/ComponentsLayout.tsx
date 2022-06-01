import ComponentsHeader from "@/layouts/ComponentsHeader";
import ComponentUse from "@/ui-elements/PreviewComponent";
import { AppConfig } from "@/utils/AppConfig";
import axios from "axios";
import React, { ReactNode } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
// import { componentPreview, componentsProperties, data } from "../utils/mockdata";

type IComponentsLayout = {
  heading: ReactNode;
};

const getAllPropertiesData = async () => {
  const res = await axios.get(`${AppConfig.baseUrl}/componentsProperties`);
  return res.data;
};

const getAllPreviewData = async () => {
  const res = await axios.get(`${AppConfig.baseUrl}/componentPreview`);
  return res.data;
};

const ComponentsLayout = (props: IComponentsLayout) => {
  const { data: properties } = useQuery("properties", getAllPropertiesData);
  const { data: preview } = useQuery("preview", getAllPreviewData);

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
              {properties?.map((property: any) => (
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
            {preview?.map((property: any) => (
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

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("properties", getAllPropertiesData);
  await queryClient.prefetchQuery("preview", getAllPreviewData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
