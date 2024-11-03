"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseIcon,
  CalendarIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

interface Job {
  id: number;
  workplace: string;
  position: string;
  years: string;
  description: string;
  skills: string[];
  logo?: string;
}

const jobHistory: Job[] = [
  {
    id: 1,
    workplace: "Company A",
    position: "Web Developer",
    years: "2018-2020",
    description:
      "Developed and maintained websites for various clients using modern web technologies and best practices.",
    skills: ["React", "TypeScript", "Node.js", "MongoDB"],
    logo: "/company-a-logo.png",
  },
  {
    id: 2,
    workplace: "Company B",
    position: "UI/UX Designer",
    years: "2020-2022",
    description:
      "Led the design team in creating intuitive and responsive user interfaces while conducting user research and usability testing.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    logo: "/company-b-logo.png",
  },
  {
    id: 3,
    workplace: "Company C",
    position: "Project Manager",
    years: "2022-Present",
    description:
      "Successfully managed multiple development projects, coordinating teams and ensuring timely delivery of high-quality solutions.",
    skills: ["Agile", "Scrum", "JIRA", "Team Leadership"],
    logo: "/company-c-logo.png",
  },
  {
    id: 4,
    workplace: "Company D",
    position: "Full Stack Developer",
    years: "2022-Present",
    description:
      "Architected and developed full-stack applications using modern technologies while mentoring junior developers.",
    skills: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    logo: "/company-d-logo.png",
  },
];

const Jhistory: React.FC = () => {
  const [activeJob, setActiveJob] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-4 pt-8 w-full max-w-3xl mx-auto px-4"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        Professional Experience
      </h2>

      {jobHistory.map((job) => (
        <motion.div
          key={job.id}
          initial={false}
          className="border border-base-300 rounded-lg overflow-hidden bg-base-200 shadow-md"
        >
          <button
            onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
            className="w-full p-4 flex items-center justify-between hover:bg-base-300 transition-colors duration-200"
          >
            <div className="flex items-center gap-4">
              {job.logo ? (
                <img
                  src={job.logo}
                  alt={job.workplace}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <BriefcaseIcon className="w-12 h-12 p-2 rounded-full bg-primary/10 text-primary" />
              )}
              <div className="text-left">
                <h3 className="font-semibold text-lg">{job.workplace}</h3>
                <p className="text-sm text-base-content/70">{job.position}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-base-content/70 hidden sm:block">
                {job.years}
              </span>
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform duration-200 ${
                  activeJob === job.id ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          <AnimatePresence>
            {activeJob === job.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="border-t border-base-300"
              >
                <div className="p-4 space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{job.years}</span>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Description</h4>
                    <p className="text-base-content/80 text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Skills & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Jhistory;
