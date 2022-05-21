//import { useRouter } from 'next/router';
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Index = () => {
  // const router = useRouter();

  return (
    <>
    <Main meta={
        <Meta
          title="bata-ui"
          description=""
        />
      } />
        {/*  <img
          src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
          alt="Nextjs starter banner"
        /> */}
      
    </>
  );
};

export default Index;
