import React from "react";
import disney from "../assets/Disney-Logo.png";
import youtube from "../assets/youtube.png";
import slack from "../assets/Slack.png";
import shopify from "../assets/Shopify_logo.png";
import hubspot from "../assets/hubspot.svg";
import google from "../assets/Google.webp";

export default function Testimonial() {
  const images = [
    { image: disney },
    { image: google },
    { image: youtube },
    { image: slack },
    { image: hubspot },
    { image: shopify },
  ];

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <p className="text-sm text-black font-bold uppercase">
        Trusted by top-leading companies.
      </p>

      <div
        className="flex  md:w-[1200px] w-[370px] mt-4 mx-auto items-center gap-4 overflow-hidden"
        // style={{ width: '-webkit-fill-available' }}
      >
        <div className=" marquee  ">
          <ul className="marquee-text  ">
            {images.map((item) => {
              return (
                <>
                  <li>
                    {" "}
                    <img
                      width={100}
                      className="textt text-white "
                      src={item.image}
                      alt="company "
                    />
                  </li>
                </>
              );
            })}
          </ul>
          <ul className="marquee-text ">
            {images.map((item) => {
              return (
                <>
                  <li>
                    {" "}
                    <img
                      width={100}
                      className=" text-white  "
                      src={item.image}
                      alt="company "
                    />
                  </li>
                </>
              );
            })}
          </ul>
          <ul className="marquee-text ">
            {images.map((item) => {
              return (
                <>
                  <li>
                    {" "}
                    <img
                      width={100}
                      className=" text-white  "
                      src={item.image}
                      alt="company "
                    />
                  </li>
                </>
              );
            })}
          </ul>
          <div className="absolute left-0 top-0 bottom-0 w-12 opacity-65 gradient-left " />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l pointer-events-none gradient-right" />
        </div>
      </div>
    </div>
  );
}
