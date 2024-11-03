"use client";

import React, { useState } from "react";
import { useTheme } from "./ThemeContext";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserIcon,
  BookOpenIcon,
  PhoneIcon,
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "@/public/Logo.svg";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const navLinks = [
    {
      name: "About Me",
      href: "/Pages/aboutMe",
      icon: <UserIcon className="w-5 h-5" />,
    },
    {
      name: "Project",
      href: "/Pages/project",
      icon: <CommandLineIcon className="w-5 h-5" />,
    },
    {
      name: "Hobbies",
      href: "/Pages/hobbies",
      icon: <BookOpenIcon className="w-5 h-5" />,
    },
    {
      name: "Contact",
      href: "/Pages/contact",
      icon: <PhoneIcon className="w-5 h-5" />,
    },
  ];

  const themes = [
    { name: "light", icon: <SunIcon className="w-5 h-5" /> },
    { name: "dark", icon: <MoonIcon className="w-5 h-5" /> },
    { name: "cyberpunk", label: "Cyber" },
    { name: "aqua", label: "Aqua" },
    { name: "coffee", label: "Coffee" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-base-100 border-b border-base-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={Logo} alt="CV Online Logo" width={40} height={40} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center space-x-1 text-base-content/70 hover:text-primary transition-colors"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}

            {/* Theme Selector */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-base-content/70 hover:text-primary"
                onClick={() => setIsThemeOpen(!isThemeOpen)} // Toggle theme visibility
              >
                {theme === "dark" ? (
                  <MoonIcon className="w-5 h-5" />
                ) : (
                  <SunIcon className="w-5 h-5" />
                )}
                <span>Theme</span>
              </button>

              {isThemeOpen && ( // Gunakan conditional rendering biasa
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-base-200 ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {themes.map((t) => (
                      <button
                        key={t.name}
                        onClick={() => {
                          setTheme(t.name);
                          setIsThemeOpen(false); // Tutup menu setelah memilih tema
                        }}
                        className={`flex items-center w-full px-4 py-2 text-sm ${
                          theme === t.name
                            ? "text-primary"
                            : "text-base-content/70"
                        } hover:bg-base-300`}
                      >
                        {t.icon}
                        <span className="ml-2">{t.label || t.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-base-content/70 hover:text-primary hover:bg-base-200"
            >
              {isDrawerOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-base-300"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-base-content/70 hover:text-primary hover:bg-base-200"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}

              <div className="px-3 py-2">
                <p className="text-sm font-medium text-base-content/70 mb-2">
                  Themes
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {themes.map((t) => (
                    <button
                      key={t.name}
                      onClick={() => {
                        setTheme(t.name);
                        setIsDrawerOpen(false);
                      }}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                        theme === t.name
                          ? "bg-primary/10 text-primary"
                          : "text-base-content/70"
                      } hover:bg-base-300`}
                    >
                      {t.icon}
                      <span>{t.label || t.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
