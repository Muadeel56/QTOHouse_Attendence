import React, { useEffect, useState } from "react";
import loginImg from "../../assets/images/login.jpg";
import home1 from "../../assets/images/home1.png";
import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css"; // Updated import

function Home() {
  return (
    <div className="flex h-[100vh] w-full bg-black">
        <div className="flex justify-center items-center">
        <div className="h-[100vh] w-[50%] overflow-hidden">
        <CCarousel controls indicators>
          <CCarouselItem>
            <CImage
              className="d-block w-100 h-full object-cover"
              src={loginImg}
              alt="First slide"
            />
            <CCarouselCaption>
              <h5 className="text-white">First Slide Label</h5>
              <p className="text-white">Description for the first slide.</p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100 h-full object-cover"
              src={home1}
              alt="Second slide"
            />
            <CCarouselCaption>
              <h5 className="text-white">Second Slide Label</h5>
              <p className="text-white">Description for the second slide.</p>
            </CCarouselCaption>
          </CCarouselItem>
          {/* Add more CarouselItems as needed */}
        </CCarousel>
      </div>
        </div>
      
    </div>
  );
}

export default Home;
