import ComponentsHeader from "@/layouts/ComponentsHeader";
import Sidebar from "@/layouts/Sidebar";
import Card from "@/ui-elements/Card";
import { AppConfig } from "@/utils/AppConfig";
import { dehydrate, QueryClient, useQuery } from "react-query";
import axios from "axios";

const getAllData = async () => {
  const res = await axios.get(`${AppConfig.baseUrl}/batadata`);
  return res.data;
};

const Components = () => {
  const { data } = useQuery("bata", getAllData);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full h-screen overflow-scroll">
          <div className="p-9">
            <ComponentsHeader />

            <div className="flex items-center">
              <br></br>
              <h1 className="px-2 py-5 text-4xl text-dark font-bold">
                All Components
              </h1>
            </div>

            <div
              className={`grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4`}
            >
              {data.map((property: any) => (
                <Card
                  img={property.img}
                  title={property.title}
                  description={property.description}
                  key={property.id}
                  href={`/components/${property.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Components;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("bata", getAllData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
