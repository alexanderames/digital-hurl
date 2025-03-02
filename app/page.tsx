"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    gsap.from(".fade-in", {
      opacity: 0, y: 20, duration: 1, stagger: 0.3, ease: "power3.out" 
    });
    gsap.to(".hover-effect", {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
      paused: true,
      reversed: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col
                    items-center justify-center relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-bold uppercase tracking-wide fade-in"
      >
        My Portfolio
      </motion.h1>

      <nav className="mt-8 flex space-x-6 fade-in">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/photography">
            <span className="text-xl hover:text-gray-400 cursor-pointer">Photography</span>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link href="/about">
            <span className="text-xl hover:text-gray-400 cursor-pointer">About</span>
          </Link>
        </motion.div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="mt-12 fade-in"
      >
        <h2 className="text-2xl font-semibold">Connect with Me</h2>
        <ul className="mt-4 space-y-2">
          <motion.li whileHover={{ scale: 1.05 }}>
            <a href="https://www.instagram.com/__alexander_not_alex/"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:underline">Instagram</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            <a href="https://letterboxd.com/whichletter/"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:underline">Letterboxd</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            <a href="https://resumes.actorsaccess.com/2093257-5848115"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:underline">Actors Access</a>
          </motion.li>
        </ul>
      </motion.div>

      <section className="mt-16 fade-in">
        <h2 className="text-3xl font-bold">Photography Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {/* Add your photography images here */}
          <img src="https://im.vsco.co/1/55d5ea33717596777575/5888b7b038b1d37731ed0899/vsco_012517.jpg" alt="PortraitOnAPortrait" className="w-full h-auto object-cover" />
          <img src="https://im.vsco.co/1/55d5ea33717596777575/5627d37682eca550235c7af4/vsco_102115.jpg" alt="LandLine" className="w-full h-auto object-cover" />
          <img src="https://im.vsco.co/1/55d5ea33717596777575/55e098d5fff3510c5fea5ab4/vsco_082815.jpg" alt="TopsOff" className="w-full h-auto object-cover" />
        </div>
      </section>

      <section className="mt-16 fade-in">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-lg">
          I&apos;m Alexander, a passionate artist and photographer. I love capturing moments and creating unique visual experiences. Follow my journey through my portfolio and connect with me on social media.
        </p>
      </section>

      <Canvas className="absolute top-0 left-0 w-full h-full z-[-1]">
        {/* Three.js scene setup here */}
      </Canvas>
    </div>
  );
}