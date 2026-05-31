"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      // Logic for navbar background
      setScrolled(window.scrollY > 10);

      // Logic for active link
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Center of the viewport

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section) {
          if (section.offsetTop <= scrollPosition) {
            setActiveLink(navLinks[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-[-10px] left-0 right-0 z-50 transition-all duration-300 ease-in-out flex items-center justify-between ${scrolled ? 'bg-black/30 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      {/* Logo is now a direct child of nav, allowing it to stick to the top-left */}
      <Link href="#home" className="flex items-center">
        <Image src="/assets/dc_logo.png" alt="DhinoCode Logo" width={120} height={120} className="h-22 w-auto transition-all duration-300" />
      </Link>
      
      {/* Nav links remain inside a container to keep their alignment */}
      <div className="container mx-auto flex items-center justify-end px-6 md:px-12 lg:px-20">
        {/* For larger screens */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (            
            <Link key={link.name} href={link.href} className={`relative px-1 py-2 text-white/80 hover:text-white transition-colors duration-300 font-medium
              ${activeLink === link.href ? 'text-white' : ''}
            `}>
              {link.name}
              {activeLink === link.href && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-accent-2)]"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;