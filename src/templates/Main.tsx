//import Link from 'next/link';
import HeroSection from "@/components/HeroSection";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import type { ReactNode } from "react";

//import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
};

const Main = (props: IMainProps) => (
  <>
    {props.meta}
    <Header />
    <div>
      <HeroSection />
      <Footer />
    </div>
  </>
);

export { Main };
