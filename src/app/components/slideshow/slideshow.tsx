"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageProps {
  url: string;
  caption: string;
}

interface SlideshowProps {
  images: ImageProps[];
}

export default function Slideshow({ images }: SlideshowProps) {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    autoPlay: true,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 1000,
    waitForAnimate: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              width={400}
              height={400}
              src={image.url}
              alt={image.caption}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
