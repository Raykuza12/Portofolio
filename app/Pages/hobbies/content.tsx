"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComputerDesktopIcon,
  MusicalNoteIcon,
  FilmIcon,
  PencilSquareIcon,
  BookOpenIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

interface Image {
  src: string;
}

interface Hobby {
  id: number;
  name: string;
  description: string;
  icon: string;
  details: string[];
  images: Image[];
}

interface HobbiesContentProps {
  hobbies: Hobby[];
}

const iconComponents = {
  ComputerDesktopIcon,
  MusicalNoteIcon,
  FilmIcon,
  PencilSquareIcon,
  BookOpenIcon,
};

const HobbiesContent: React.FC<HobbiesContentProps> = ({ hobbies }) => {
  const [activeHobby, setActiveHobby] = useState<number | null>(null);

  const toggleHobby = (id: number) => {
    setActiveHobby(activeHobby === id ? null : id);
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
          delay: 0.1,
        },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-7xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-center mb-12">Hobi dan Minat</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hobbies.map((hobby) => {
          const IconComponent =
            iconComponents[hobby.icon as keyof typeof iconComponents];
          return (
            <motion.div
              key={hobby.id}
              layout
              className="bg-base-100 rounded-lg shadow-lg overflow-hidden"
            >
              <motion.div
                className="p-6 cursor-pointer"
                onClick={() => toggleHobby(hobby.id)}
              >
                <div className="flex items-center justify-center mb-4">
                  <IconComponent className="w-16 h-16 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-center mb-2">
                  {hobby.name}
                </h2>
                <p className="text-base-content/80 text-center">
                  {hobby.description}
                </p>
                <motion.div
                  className="flex justify-center mt-4"
                  animate={{ rotate: activeHobby === hobby.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-6 h-6" />
                </motion.div>
              </motion.div>
              <AnimatePresence>
                {activeHobby === hobby.id && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="px-6 pb-6 overflow-hidden"
                  >
                    <h3 className="font-semibold mb-4">Favorit:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      {hobby.images.map((image, index) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-lg shadow-lg"
                        >
                          <img
                            src={image.src}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold mb-2">Kategori & Detail:</h3>
                      <ul className="list-disc list-inside">
                        {hobby.details.map((detail, index) => (
                          <li key={index} className="text-base-content/70">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default HobbiesContent;
