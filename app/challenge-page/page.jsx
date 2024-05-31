import React from 'react'
import FirstSection from "@/components/challengePage-sections/section1"
import SecondSection from "@/components/challengePage-sections/section2"
import ThrdSection from "@/components/challengePage-sections/section3"
import ForthSection from "@/components/challengePage-sections/section4"
import FifthSection from "@/components/challengePage-sections/section5"
import SixthSection from "@/components/challengePage-sections/section6"
import SeventhSection from "@/components/challengePage-sections/section7"
import EighthSection from "@/components/challengePage-sections/section8"
import NinthSection from "@/components/challengePage-sections/section9"

const ChallengePage = () => {
  return (
    <>
      <div className='bg-F5F5F5'>
        <FirstSection />
        <SecondSection />
        <ThrdSection />
        <ForthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSection />
        <NinthSection />
      </div>
    </>
  )
}

export default ChallengePage;
