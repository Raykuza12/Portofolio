"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Interface untuk tipe data project
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

// Data projects
const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and TailwindCSS featuring dark mode, responsive design, and smooth animations.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    imageUrl: "/portofolio.jpg",
    liveUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/username/portfolio",
    category: "Web Development",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce management with real-time analytics, inventory management, and order processing.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    imageUrl: "/ecommerce.jpg",
    liveUrl: "https://dashboard.example.com",
    githubUrl: "https://github.com/username/dashboard",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Mobile Weather App",
    description:
      "A weather application that provides real-time weather updates and forecasts with a clean, intuitive interface.",
    technologies: ["React Native", "Weather API", "Redux", "TypeScript"],
    imageUrl: "/weatherapp.jpg",
    liveUrl: "https://weather.example.com",
    githubUrl: "https://github.com/username/weather-app",
    category: "Mobile Development",
  },
  {
    id: 4,
    title: "Brand Identity Design",
    description:
      "Complete brand identity design including logo, business cards, and marketing materials using Adobe Creative Suite.",
    technologies: ["Illustrator", "Photoshop", "Figma"],
    imageUrl: "/brand-design.jpg",
    category: "Graphic Design",
  },
  {
    id: 5,
    title: "Social Media Graphics",
    description:
      "Created engaging social media graphics and marketing materials for various clients.",
    technologies: ["Photoshop", "Illustrator", "Figma"],
    imageUrl: "/social-media.jpg",
    category: "Graphic Design",
  },
];

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-300 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content mb-4">
            My Projects
          </h1>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in web
            development, mobile development, and other technical areas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-base-100 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-base-content mb-2">
                  {project.title}
                </h3>
                <p className="text-base-content/70 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      Live Demo →
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-base-content/70 hover:text-primary transition-colors"
                    >
                      View Code →
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-base-content/70 mb-4">
            Interested in working together? Let's connect!
          </p>
          <Link
            href="/Pages/contact"
            className="inline-block bg-primary text-primary-content px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPage;
