"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
  {
    num: "01",
    title: "Governance and Administration",
    description:
      "Responsible for the administration and governance of Liyue. She ensures that the city operates efficiently, that the law is enforced, and that all aspects of governance function smoothly. This includes making important decisions that influence the direction of the city's policies.",
    href: "",
  },
  {
    num: "02",
    title: "Economic Management",
    description:
      "Plays a key role in managing Liyue's economy, including trade, industry, and resource management. She works to maintain economic stability and promote sustainable growth, ensuring that Liyue remains a prosperous center of commerce in Teyvat.",
    href: "",
  },
  {
    num: "03",
    title: "Crisis Management",
    description:
      "Involved in handling and resolving crises that threaten Liyue, such as when Liyue faced the threat of Osial and the incident surrounding the death of Rex Lapis. She plays a role in maintaining order and security during difficult times, as well as coordinating the response to emerging threats.",
    href: "",
  },
  {
    num: "04",
    title: "Infrastructure Development and Public Welfare",
    description:
      "Supports the development of infrastructure and various projects that enhance the quality of life for Liyue's citizens. She focuses on innovation and physical development that help the city continue to grow and strengthen public welfare.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
