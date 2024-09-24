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
    <div className="flex  w-full bg-red-">
      <div className="flex justify-center items-center flex-col overflow-auto">
        <div className="mt-12 w-[50%] overflow">
          <CCarousel controls indicators>
            <CCarouselItem>
              <CImage
                className="d-block w-[80%] h-full object-cover"
                src={home1}
                alt="First slide"
              />
              <CCarouselCaption>
                <h5 className="text-white">First Slide Label</h5>
                <p className="text-white">Description for the first slide.</p>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="d-block w-[80%] h-full object-cover"
                src={home1}
                alt="Second slide"
              />
              <CCarouselCaption>
                <h5 className="text-black">Second Slide Label</h5>
                <p className="text-black">Description for the second slide.</p>
              </CCarouselCaption>
            </CCarouselItem>
            {/* Add more CarouselItems as needed */}
          </CCarousel>
        </div>
        <div className="flex flex-col justify-center items-center my-10">
          <h1 className="text-3xl font-semibold">
            We also provide takeoff services to all trade contracts
          </h1>
          <p className="text-gray-500">
            To achieve this, it would be necessary to have uniform grammar,
            pronounciation and more common words. If several languages coalesce
            the grammer
          </p>
        </div>
        <div className="grid grid-cols-3 gap-32 m-10">
          <div className="flex flex-col text-justify space-y-4 w-[300px]  items-start">
            <h1 className="text-xl font-bold">Concrete Estimation</h1>
            <p className="text-gray-500">Accurately quantify and cost concrete requirements to ensure structural integrity and budget efficiency.</p>
            <button className=" font-semibold text-blue-600">Learn More</button>
          </div>
          <div className="flex flex-col text-justify space-y-4 w-[300px]  items-start">
            <h1 className="text-xl font-bold">Drywall Estimation</h1>
            <p className="text-gray-500">Provide precise measurements and costs for drywall installation to streamline interior construction.</p>
            <button className=" font-semibold text-blue-600">Learn More</button>
          </div>
          <div className="flex flex-col text-justify space-y-4 w-[300px]  items-start">
            <h1 className="text-xl font-bold">Lumber Estimation</h1>
            <p className="text-gray-500">Calculate the exact quantity and cost of lumber needed for interior construction.</p>
            <button className=" font-semibold text-blue-600">Learn More</button>
          </div>
          <div className="flex flex-col text-justify space-y-4 w-[300px]  items-start">
            <h1 className="text-xl font-bold">Paint Estimation</h1>
            <p className="text-gray-500">Estimate the amount and cost of paint required to achieve a flawless and durable finish.</p>
            <button className=" font-semibold text-blue-600">Learn More</button>
          </div>
          <div className="flex flex-col text-justify space-y-4 w-[300px]  items-start">
            <h1 className="text-xl font-bold">Earthwork Estimation</h1>
            <p className="text-gray-500">Determine the volume and cost of earthmoving required for excavation and site preparation.</p>
            <button className=" font-semibold text-blue-600">Learn More</button>
          </div>
          <div className="flex flex-col text-justify space-y-4 w-[300px]  items-start">
            <h1 className="text-xl font-bold">Flooring Estimation</h1>
            <p className="text-gray-500">Assess and estimate the materials and labor needed for high-quality flooring installations.</p>
            <button className=" font-semibold text-blue-600">Learn More</button>
          </div>
          <div className="flex flex-col text-justify space-y-4 w-[300px]  items-start">
            <h1 className="text-xl font-bold">Electrical Estimation</h1>
            <p className="text-gray-500">Deliver detailed estimates for electrical components and installations to ensure safety and compliance.</p>
            <button className=" font-semibold text-blue-600">Learn More</button>
          </div>
          <div className="flex flex-col text-justify space-y-4 w-[300px]  items-start">
            <h1 className="text-xl font-bold">Plumbing Estimation</h1>
            <p className="text-gray-500">Accurately forecast the materials and costs for plumbing systems to ensure efficient and reliable installations.</p>
            <button className=" font-semibold text-blue-600">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
