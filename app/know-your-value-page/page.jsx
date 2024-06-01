import KnowFirstSection from "@/components/knowYourValuePage-sections/section1";
import Knowsecondsection from "@/components/knowYourValuePage-sections/section2";
import KnowthirdSection from "@/components/knowYourValuePage-sections/section3";
import KnowfourSection from "@/components/knowYourValuePage-sections/section4";
import KnowfifthSection from "@/components/knowYourValuePage-sections/section5";
import React from "react";

const KnowYourValuePage = () => {
  return (
    <>
      <div className="">
        <KnowFirstSection />
        <Knowsecondsection/>
        <KnowthirdSection/>
        <KnowfourSection/>
        <KnowfifthSection/>
      </div>
    </>
  );
};

export default KnowYourValuePage;
