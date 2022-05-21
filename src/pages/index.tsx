//import { useRouter } from 'next/router';
import Header from "@/layouts/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/layouts/Footer";

const Index = () => {
  // const router = useRouter();

  return (
    <>
      <Header />
      <div className="">
        <HeroSection />
        <Footer />
        {/*  <img
          src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
          alt="Nextjs starter banner"
        /> */}
      </div>
    </>
  );
};

export default Index;
