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
            <a href="https://www.instagram.com/yourhandle"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:underline">Instagram</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            <a href="https://letterboxd.com/yourprofile"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:underline">Letterboxd</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            <a href="https://actorsaccess.com/yourprofile"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:underline">Actors Access</a>
          </motion.li>
        </ul>
      </motion.div>

      <Canvas className="absolute top-0 left-0 w-full h-full z-[-1]">
        {/* Three.js scene setup here */}
      </Canvas>
    </div>
  );
}
