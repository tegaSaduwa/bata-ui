import { NextPage } from "next";
import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
//import Image from "next/image";

import axios from "axios";

type SpaceXData = [
  {
    title: string;
    body: string;
    links: {
      patch: {
        large: string;
      };
    };
  }
];

let getSpaceXData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

const about: NextPage = () => {
  const { data, isLoading, isFetching } = useQuery<SpaceXData>(
    "spacex",
    getSpaceXData
  );
  console.log(data);
  if (isLoading) return <>Loading...</>;
  if (!data) return <>no data</>;
  return (
    <div>
      {data.map((x:any) => (
        <div>{x.title}</div>
      ))}
    </div>
  );
};

export default about;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<SpaceXData>("spacex", getSpaceXData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
