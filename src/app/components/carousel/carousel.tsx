"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronBackOutline, ChevronForwardOutline } from "react-ionicons";

export default function Carousel() {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const data = {
    resources: [
      {
        title: "Find me on Mastodon",
        link: "https://indieweb.social/@kendalmintcode",
        imageUrl: "https://placeimg.com/300/300/any",
      },
      {
        title: "Welcome to K-Tech",
        link: "https://k-tech.systems",
        imageUrl: "https://placeimg.com/300/300/animals",
      },
      {
        title: "Some sort of third title",
        link: "https://indieweb.social/@kendalmintcode",
        imageUrl: "https://placeimg.com/300/300/architecture",
      },
      {
        title: "Super item number the last",
        link: "https://indieweb.social/@kendalmintcode",
        imageUrl: "https://placeimg.com/300/300/tech",
      },
    ],
  };

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="flex w-[375px] flex-col items-start gap-12 px-5 py-16 lg:w-full lg:gap-20 lg:px-16 lg:py-28">
      <div className="flex flex-col items-start gap-5 self-stretch lg:w-[560px] lg:gap-6" />
      <h2 className="self-stretch text-4xl not-italic font-bold leading-[120%] lg:text-5xl">
        Satisfied Customers
      </h2>
      <p className="self-stretch text-base not-italic font-normal leading-[150%] lg:text-lg">
        {"Read what our customers have to say about our HVAC services"}
      </p>
      <div className="flex flex-col items-start gap-12 self-stretch lg:h-[394px] lg:gap-8">
        <div className="relative overflow-hidden">
          <div className="flex justify-between absolute top left w-full h-full">
            <button
              onClick={movePrev}
              className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("prev")}
            >
              <ChevronBackOutline
                color={"#fff"}
                title={"prev"}
                height={"50px"}
                width={"50px"}
              />
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("next")}
            >
              <ChevronForwardOutline
                color={"#fff"}
                height={"50px"}
                width={"50px"}
                title={"next"}
              />
              <span className="sr-only">Next</span>
            </button>
          </div>
          <div
            ref={carousel}
            className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          >
            {/* replace with testimonial component */}
            {data.resources.map((resource, index) => {
              return (
                <div
                  key={index}
                  className="carousel-item text-center relative w-64 h-64 snap-start"
                >
                  <a
                    href={resource.link}
                    className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                    style={{
                      backgroundImage: `url(${resource.imageUrl || ""})`,
                    }}
                  >
                    <img
                      src={resource.imageUrl || ""}
                      alt={resource.title}
                      className="w-full aspect-square hidden"
                    />
                  </a>
                  <a
                    href={resource.link}
                    className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                  >
                    <h3 className="text-white py-6 px-3 mx-auto text-xl">
                      {resource.title}
                    </h3>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
