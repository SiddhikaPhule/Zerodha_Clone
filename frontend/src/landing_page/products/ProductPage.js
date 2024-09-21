import React from "react";
import Hero from "./Hero";
import RightSection from "./RightSection";
import Universe from "./Universe";
import LeftSection from "./LeftSection";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media\Images\kite.png"
        productName="Kite"
        productDescsription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageUrl="media\Images\console.png"
        productName="Console"
        productDescsription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageUrl="media\Images\coin.png"
        productName="Coin"
        productDescsription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageUrl="media\Images\kiteconnect.png"
        productName="Kite Connect API"
        productDescsription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <LeftSection
        imageUrl="media/Images/varsity-products.png"
        productName="Varsity mobile"
        productDescsription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center fs-4">
        Want to know more about our technology stack? Check out the{" "}
        <a style={{textDecoration:"none"}} href=""> Zerodha.tech</a> blog.{" "}
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
