"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import me from "@/public/Logo.svg"; // Pastikan path gambar sesuai
import Link from "next/link";

const HeroPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-base-100 to-base-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-primary/20 rounded-full"
            animate={{
              x: ["0vw", "100vw"],
              y: [Math.random() * 100 + "vh", Math.random() * 100 + "vh"],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `-${Math.random() * 20}px`,
              top: `${Math.random() * 100}vh`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between relative z-10"
      >
        {/* Left Section - Text Content */}
        <motion.div
          variants={itemVariants}
          className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary mb-4"
          >
            👋 Welcome to my portfolio
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Transforming Ideas Into Digital Reality
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-base-content/70 mb-8 max-w-xl"
          >
            I'm Muhamad Rizki Ardiansyah, a passionate Web Developer & UI/UX
            Designer crafting beautiful and functional digital experiences.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
          >
            {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-base-200 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <button className="btn btn-primary btn-lg">
              <Link href="./Pages/project">View Project</Link>
            </button>
            <button className="btn btn-outline btn-primary btn-lg">
              <Link href="./Pages/aboutMe">Contact Me</Link>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Section - Image & Decorative Elements */}
        <motion.div variants={itemVariants} className="lg:w-1/2 relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            {/* Rotating Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
            />

            {/* Profile Image */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-primary/20 bg-base-200">
              <Image
                src={me}
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Floating Icons */}
            {["💻", "🎨", "⚡", "🚀"].map((emoji, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="absolute text-2xl"
                style={{
                  top: `${20 + index * 25}%`,
                  left: index % 2 ? "10%" : "80%",
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center gap-6"
      >
        {[
          { Icon: FaGithub, href: "https://github.com/Raykuza12" },
          { Icon: FaEnvelope, href: "mailto:muhrizkiard@gmail.com" },
          { Icon: FaLinkedin, href: "#" },
        ].map(({ Icon, href }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base-content/60 hover:text-primary transform hover:scale-110 transition-all duration-300"
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroPage;
