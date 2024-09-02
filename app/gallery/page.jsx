"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "keqingxqixing@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Liyue, Zhejiang, China",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [selectedImageType, setSelectedImageType] = useState(""); // State untuk menyimpan pilihan pengguna

  const handleSubmit = (event) => {
    if (!selectedImageType) {
      event.preventDefault(); // Mencegah form submit jika belum ada pilihan
      alert("Please select type image before sending the message.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              action="https://formspree.io/f/xeojdqna"
              method="POST"
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit} // Tambahkan handler untuk submit
            >
              <h3 className="text-4xl text-accent">Image Generate</h3>
              <p className="text-white/60">
                If you want to have some of my images you can send a request to
                me and I will provide the best quality images for you. One email
                can take for 5 images in 1 day
              </p>
              {/* input */}
              <Input
                type="email"
                name="email"
                required
                placeholder="Email Address"
              ></Input>
              {/* select */}
              <Select onValueChange={setSelectedImageType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Type Image"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select Type Image</SelectLabel>
                    <SelectItem value="desktop">Desktop</SelectItem>
                    <SelectItem value="mobile">Mobile</SelectItem>
                    <SelectItem value="bonus">Bonus Image</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Hidden input to send selected image type */}
              <input
                type="hidden"
                name="type_image"
                value={selectedImageType}
              />
              {/* textarea */}
              <Textarea
                className="h-[150px]"
                name="message"
                placeholder="Text for those of you who want to generate an image, if you just want to request my image, just type ``your image``...."
                required
              />
              {/* btn */}
              <Button size="md" type="submit" className="max-w-40">
                Send Messages
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul>
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
