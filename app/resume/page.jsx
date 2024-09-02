"use client";

import MyIcon from "@/public/assets/skills/trace1.svg";
import MyIcon2 from "@/public/assets/skills/trace3.svg";
import MyIcon3 from "@/public/assets/skills/trace4.svg";
import MyIcon4 from "@/public/assets/skills/trace2.svg";
import MyIcon5 from "@/public/assets/skills/trace6.svg";
import MyIcon6 from "@/public/assets/skills/trace5.svg";

// about
const about = {
  title: "About me",
  description:
    "I am Keqing, the Yuheng of the Liyue Qixing. I am dedicated to the governance and administration of Liyue, ensuring our city thrives through efficient management, strong economic policies, and innovative development. Though I respect the Adepti and traditions, I believe in humanity's potential to shape our future. I stand firm in my belief that progress is built through hard work and determination. My role is to protect Liyue, uphold justice, and guide our people towards a prosperous future.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Keqing",
    },
    {
      fieldName: "Birthday",
      fieldValue: "20th November",
    },

    {
      fieldName: "Experience",
      fieldValue: "8+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "keqingxqixing@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Japan, China, Korea",
    },
  ],
};

// constellation
const experience = {
  icon: "/assets/resume/cap.svg",
  title: "My Constellations",
  description: "My constellations description.",
  items: [
    {
      company: "Constellation 1",
      position:
        "When Keqing’s Elemental Skill (Starward Sword) or Elemental Burst (Starward Sword) hits an enemy, it triggers an additional Electro damage effect on her next normal attack, dealing AoE damage.",
      duration: "C1 - Thundering Penance",
    },
    {
      company: "Constellation 2",
      position:
        "Using Starward Sword (Elemental Skill) or Starward Sword (Elemental Burst) removes Electro from Keqing and provides additional Electro damage to affected enemies.",
      duration: "C2 - Stellar Restoration",
    },
    {
      company: "Constellation 3",
      position:
        "Increases the level of Starward Sword (Elemental Skill) by 3, up to a maximum level of 15.",
      duration: "C3 - Shattered Thunder",
    },
    {
      company: "Constellation 4",
      position:
        "After using Starward Sword (Elemental Burst), Keqing’s subsequent attacks deal additional Electro damage to enemies affected by Electro.",
      duration: "C4 - Intertwined Fate",
    },
    {
      company: "Constellation 5",
      position:
        "Increases the level of Starward Sword (Elemental Burst) by 3, up to a maximum level of 15.",
      duration: "C5 - Thunderclap",
    },
    {
      company: "Constellation 6",
      position:
        "When Keqing’s Elemental Skill (Starward Sword) hits an enemy, affected enemies will take additional Electro DMG and Keqing will gain a buff that increases her AoE damage.",
      duration: "C6 - Concerto for Electro",
    },
  ],
};

// desc skill
const education = {
  icon: "/assets/resume/badge.svg",
  title: "Skills",
  description: "The following is a description of my skills",
  items: [
    {
      institution: "Cooldown: No cooldown",
      degree:
        "Normal attack performed continuously while pressing the attack button.",
      duration: "Normal Attack - Yunlai Swordsmanship",
    },
    {
      institution: "Cooldown: 6 seconds",
      degree:
        "Keqing performs an Electro attack with her sword, dealing Electro damage to enemies in her vicinity.",
      duration: "Elemental Skill - Stellar Restoration",
    },
    {
      institution: "Cooldown: 15 seconds",
      degree:
        "Keqing summons Thunderclap to release lightning on nearby enemies, dealing Electro damage within its range.",
      duration: "Elemental Burst - Starward Sword",
    },
    {
      institution: "passive",
      degree:
        "After recasting Stellar Restoration while a Lightning Stiletto is present, Keqing's weapon gains an Electro Infusion for 5s.",
      duration: "1st Ascension - Thundering Penance",
    },
    {
      institution: "passive",
      degree:
        "When casting Starward Sword, Keqing's CRIT Rate is increased by 15%, and her Energy Recharge is increased by 15%. This effect lasts for 8s",
      duration: "4th Ascension - Aristocratic Dignity",
    },
    {
      institution: "passive",
      degree:
        "When dispatched on an expedition in Liyue, time consumed is reduced by 25%",
      duration: "Utility - Land's Overseer",
    },
  ],
};

// Skills
const skills = {
  title: "Talents",
  description: "skill & Talent logo",
  skillList: [
    {
      icon: <MyIcon />,
      name: "Yunlai Swordsmanship",
    },
    {
      icon: <MyIcon2 />,
      name: "Stellar Restoration",
    },
    {
      icon: <MyIcon3 />,
      name: "Starward Sword",
    },
    {
      icon: <MyIcon4 />,
      name: "Thundering Penance",
    },
    {
      icon: <MyIcon5 />,
      name: "Aristocratic Dignity",
    },
    {
      icon: <MyIcon6 />,
      name: "Land's Overseer",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Constellations</TabsTrigger>
            <TabsTrigger value="education">Skills</TabsTrigger>
            <TabsTrigger value="skills">Talents</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* constellation */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[400px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* desc skill */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[350px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl transition-all duration-300  transform group-hover:scale-110 group-hover:text-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize text-center">
                                {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
