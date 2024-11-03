"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaWhatsapp,
  FaUserAlt,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaVenusMars,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdWork } from "react-icons/md";
import me from "@/public/me.jpg";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiStrapi,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
} from "react-icons/si";
import Rating from "@/app/component/rating";

const AboutMePage = () => {
  const personalInfo = [
    {
      icon: <FaUserAlt />,
      label: "Nama Lengkap",
      value: "Muhamad Rizki Ardiansyah",
    },
    {
      icon: <FaBirthdayCake />,
      label: "Tempat, Tanggal Lahir",
      value: "Bandung, 16 Desember 2004",
    },
    {
      icon: <FaVenusMars />,
      label: "Jenis Kelamin",
      value: "Laki-laki",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Alamat",
      value:
        "Jl. Kp. Ciburial, Ciherang, Kec. Nagreg, Kabupaten Bandung, Jawa Barat",
    },
    {
      icon: <FaGraduationCap />,
      label: "Pendidikan",
      value: "Mahasiswa Sistem Informasi - Universitas Ma'soem",
    },
    {
      icon: <MdWork />,
      label: "Pekerjaan",
      value: "Web Developer & Graphic Designer",
    },
  ];

  const educationHistory = [
    {
      id: 1,
      level: "SD",
      school: "MI Tanwiriyah I",
      yearIn: "2009",
      yearOut: "2016",
    },
    {
      id: 2,
      level: "SMP",
      school: "SMPN 3 Limbangan",
      yearIn: "2016",
      yearOut: "2018",
    },
    {
      id: 3,
      level: "SMP",
      school: "SMP Tri Bhakti",
      yearIn: "2018",
      yearOut: "2019",
    },
    {
      id: 4,
      level: "SMK",
      school: "SMKN 6 Garut",
      yearIn: "2019",
      yearOut: "2022",
    },
    {
      id: 5,
      level: "S1",
      school: "Universitas Ma'soem",
      yearIn: "2022",
      yearOut: "Now",
    },
  ];

  const skills = [
    {
      name: "React",
      icon: <FaReact className="text-[#61DAFB]" />,
      level: 90,
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      level: 85,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-[#F7DF1E]" />,
      level: 88,
      category: "Programming",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-[#3178C6]" />,
      level: 82,
      category: "Programming",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-[#339933]" />,
      level: 80,
      category: "Backend",
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="text-[#E34F26]" />,
      level: 95,
      category: "Frontend",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-[#1572B6]" />,
      level: 90,
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
      level: 88,
      category: "Frontend",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-[#F05032]" />,
      level: 85,
      category: "Tools",
    },
    {
      name: "Figma",
      icon: <SiFigma />,
      level: 80,
      category: "Design",
    },
    {
      name: "Adobe Photoshop",
      icon: <SiAdobephotoshop className="text-[#31A8FF]" />,
      level: 85,
      category: "Design",
    },
    {
      name: "Adobe Illustrator",
      icon: <SiAdobeillustrator className="text-[#FF9A00]" />,
      level: 90,
      category: "Design",
    },
  ];

  const contactLinks = [
    {
      id: 1,
      icon: <FaGithub className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/Raykuza12",
      username: "Raykuza12",
    },
    {
      id: 2,
      icon: <MdEmail className="h-6 w-6" />,
      label: "Email",
      href: "mailto:muhrizkiard@gmail.com",
      username: "muhrizkiard@gmail.com",
    },
    {
      id: 3,
      icon: <FaWhatsapp className="h-6 w-6" />,
      label: "WhatsApp",
      href: "https://wa.me/6283874561641",
      username: "+62 838-7456-1641",
    },
    {
      id: 4,
      icon: <FaInstagram className="h-6 w-6" />,
      label: "Instagram",
      href: "https://www.instagram.com/muhrizkiard/profilecard/?igsh=MXg5Z2NneTliamdobg==",
      username: "@muhrizkiard",
    },
  ];

  const workHistory = [
    {
      id: 1,
      position: "Web Developer",
      company: "Tech Solutions Inc.",
      yearStart: "2022",
      yearEnd: "Present",
      description:
        "Developing and maintaining web applications using React and Node.js.",
    },
    {
      id: 2,
      position: "UI/UX Designer",
      company: "Creative Designs Co.",
      yearStart: "2020",
      yearEnd: "2022",
      description:
        "Designed user interfaces for mobile and web applications using Figma and Adobe XD.",
    },
    {
      id: 3,
      position: "Junior Frontend Developer",
      company: "StartUp Innovations",
      yearStart: "2019",
      yearEnd: "2020",
      description:
        "Assisted in building responsive websites using HTML, CSS, and JavaScript.",
    },
    {
      id: 4,
      position: "Graphic Designer",
      company: "Creative Studio",
      yearStart: "2021",
      yearEnd: "Present",
      description:
        "Creating visual content using Adobe Creative Suite (Photoshop, Illustrator) and Figma for various digital and print media projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-base-100 rounded-lg shadow-xl overflow-hidden"
      >
        {/* Header Section */}
        <div className="p-8 text-center border-b border-base-300">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <Image
              src={me}
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-primary"
            />
          </div>
          <h1 className="text-3xl font-bold text-base-content">
            Muhamad Rizki Ardiansyah
          </h1>
          <p className="mt-2 text-xl text-base-content/70">
            Web Developer, UI/UX Designer & Graphic Designer
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-black mb-4 ">
              User Ratings
            </h2>
            <Rating />
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Personal Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-base-content mb-4">
              Informasi Personal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-base-200/50"
                >
                  <div className="text-primary">{info.icon}</div>
                  <div>
                    <div className="text-sm text-base-content/70">
                      {info.label}
                    </div>
                    <div className="font-medium text-base-content">
                      {info.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* About Me */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-base-content mb-4">
              Tentang Saya
            </h2>
            <p className="text-base-content/70 leading-relaxed">
              Saya adalah seorang mahasiswa jurusan Sistem Informasi di
              Universitas Ma'soem dengan passion dalam pengembangan web, desain
              UI/UX dan Desain Grafis. Saya memiliki ketertarikan yang kuat
              dalam menciptakan pengalaman pengguna yang menarik dan fungsional.
              Selalu bersemangat untuk belajar teknologi baru dan menciptakan
              solusi inovatif untuk masalah kompleks.
            </p>
          </div>

          {/* Education History */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-base-content mb-4">
              Riwayat Pendidikan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {educationHistory.map((edu) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: edu.id * 0.1 }}
                  className="flex flex-col items-center space-y-3 p-3 rounded-lg bg-base-200/50"
                >
                  <div className="text-lg font-medium text-base-content">
                    {edu.level}
                  </div>
                  <div className="text-sm text-base-content/70">
                    {edu.school}
                  </div>
                  <div className="text-sm text-base-content/60">
                    {edu.yearIn} - {edu.yearOut}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-base-content mb-6">
              Keterampilan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-base-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">{skill.icon}</div>
                    <div>
                      <h3 className="font-medium text-base-content">
                        {skill.name}
                      </h3>
                      <span className="text-xs text-base-content/60">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div className="text-xs text-base-content/70">
                        Skill Level
                      </div>
                      <div className="text-xs text-base-content/70">
                        {skill.level}%
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-base-300">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skill Categories Summary */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Frontend", "Backend", "Programming", "Tools"].map(
                (category) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-primary/10 rounded-lg p-3 text-center"
                  >
                    <div className="text-sm font-medium text-primary">
                      {category}
                    </div>
                    <div className="text-2xl font-bold text-base-content">
                      {
                        skills.filter((skill) => skill.category === category)
                          .length
                      }
                    </div>
                    <div className="text-xs text-base-content/60">Skills</div>
                  </motion.div>
                )
              )}
            </div>

            {/* Work History */}
            <div className="mb-8 mt-10">
              <h2 className="text-2xl font-semibold text-base-content mb-4">
                Riwayat Pekerjaan
              </h2>
              <div className="space-y-4">
                {workHistory.map((work) => (
                  <motion.div
                    key={work.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: work.id * 0.1 }}
                    className="flex flex-col space-y-2 p-4 rounded-lg bg-base-200/50"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-medium text-base-content">
                          {work.position}
                        </div>
                        <div className="text-sm text-base-content/70">
                          {work.company}
                        </div>
                      </div>
                      <div className="text-sm text-base-content/60">
                        {work.yearStart} - {work.yearEnd}
                      </div>
                    </div>
                    <p className="text-sm text-base-content/70">
                      {work.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Links */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-base-content mb-4">
                Kontak
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-base-200/50"
                  >
                    <div className="text-primary">{link.icon}</div>
                    <div>
                      <div className="text-sm text-base-content/70">
                        {link.label}
                      </div>
                      <div className="font-medium text-base-content">
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary"
                        >
                          {link.username}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMePage;
