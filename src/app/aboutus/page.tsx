import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import images from "@/img";

const founderArray = [
  {
    name: "Niamh O'Shea",
    position: "Co-founder and Chief Executive",
    images: images.founder1,
  },
  {
    name: "Danien Jame",
    position: "Co-founder and Chief Executive",
    images: images.founder2,
  },
  {
    name: "Orla Dwyer",
    position: "Co-founder, Chairman",
    images: images.founder3,
  },
  {
    name: "Dara Frazier",
    position: "Co-Founder, Chief Strategy Officer",
    images: images.founder4,
  },
];

const factsArray = [
  {
    title: "10 million",
    info: "Articles have been public around the world (as of Sept. 30, 2021)",
  },
  {
    title: "100,000",
    info: "Registered users account (as of Sept. 30, 2021)",
  },
  {
    title: "220+",
    info: "Countries and regions have our presence (as of Sept. 30, 2021",
  },
];
const aboutus = () => {
  return (
    <div className={cn("w-full my-20")}>
      <div className={cn("w-4/5tt mx-auto")}>
        <div className={cn("grid lg:grid-cols-[1.5fr_2fr] items-center gap-12 grid-cols-1")}>
          <div>
            <h1 className={cn("text-4xl font-bold leading-[0.5]")}>👋 About Us.</h1>
            <p className={cn("text-xl leading-loose mt-4")}>
              We’re impartial and independent, and every day we create
              distinctive, world-class programmes and content which inform,
              educate and entertain millions of people in the around the world.
            </p>
          </div>
          <div>
            <Image src={images.hero2} width={500}
              height={500} alt="About Us Image" />
          </div>
        </div>

        <div className={cn("mt-8")}>
          <h2 className={cn("text-4xl font-bold leading-[1]")}>⛱ Founder</h2>
          <p className={cn("text-xl leading-[1.2] mt-4 lg:w-2/5  w-full")}>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={cn("mt-8")}>
          <div className={cn("grid lg:grid-cols-4 gap-8 grid-cols-1 md:grid-cols-2")}>
            {founderArray.map((el, i) => (
              <div key={i} className={cn("bg-icons p-4 rounded-lg text-main-bg")}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={cn("rounded-lg h-80 object-cover object-center")}
                />
                <h3 className={cn("text-2xl leading-none mt-4")}>{el.name}</h3>
                <p className={cn("text-1xl leading-none")}>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={cn("mt-8")}>
          <h2 className={cn("text-4xl font-bold leading-[1]")}>🚀 Fast Facts</h2>
          <p className={cn("text-xl leading-[1.2] lg:w-2/5 w-full mt-4")}>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={cn("mt-8")}>
          <div className={cn("grid lg:grid-cols-3 gap-8 grid-cols-1")}>
            {factsArray.map((el, i) => (
              <div key={i} className={cn("bg-icons p-4 px-12 rounded-lg text-main-bg")}>
                <h3 className={cn("text-4xl leading-none lg:text-2xl")}>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
