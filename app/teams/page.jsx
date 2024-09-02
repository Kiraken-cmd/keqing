"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSLiderBtns from "@/components/WorkSLiderBtns";

const projects = [
  {
    num: "01",
    category: "Quicken/Aggravate",
    title: "party 1",
    description:
      "Quicken/Aggravate/Spread Reaction: The team is very focused on utilizing the Quicken reaction triggered by Dendro (Nahida) and Electro (Keqing, Shinobu) to produce Aggravate (Electro) and Spread (Dendro).",
    stack: [
      { name: "Keqing" },
      { name: "Nahida" },
      { name: "Sucrose" },
      { name: "Shinobu" },
    ],
    image: "/assets/work/team1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Hybrid Elemental",
    title: "party 2",
    description:
      "Hybrid Elemental Reaction Party with a focus on Superconduct, Electro-Charged, Freeze, and Shield, combines diverse elemental reactions with defensive support from Zhongli to create a flexible and battle-hardened team.",
    stack: [
      { name: "Keqing" },
      { name: "Ganyu" },
      { name: "Yelan" },
      { name: "Zhongli" },
    ],
    image: "/assets/work/team2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Electro-Boosted",
    title: "party 3",
    description:
      "Electro-Boosted Party which focuses on buffing and maximizing Electro damage through ATK buff synergy from Bennett and Kujou Sara, as well as increasing damage through Swirl from Kazuha.",
    stack: [
      { name: "Keqing" },
      { name: "Bennet" },
      { name: "Kujou" },
      { name: "Kazuha" },
    ],
    image: "/assets/work/team3.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Cryo-Hydro Frozen",
    title: "party 4",
    description:
      "Cryo-Hydro Frozen Party, which focuses on utilizing the Frozen reaction to provide crowd control and increase damage output, uses Shenhe and Chongyun to enhance Cryo DMG as well as Kokomi for consistent Hydro applications.",
    stack: [
      { name: "Keqing" },
      { name: "Shenhe" },
      { name: "Chongyun" },
      { name: "Kokomi" },
    ],
    image: "/assets/work/team4.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80hv] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Party
              </h2>
              {/* desc */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>More Details</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <WorkSLiderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
