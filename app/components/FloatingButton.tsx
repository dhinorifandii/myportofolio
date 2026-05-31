"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';

interface FloatingButtonProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ isPlaying, togglePlay }) => {
  const [mounted, setMounted] = useState(false);

  // Pastikan komponen hanya dirender di sisi client
  useEffect(() => setMounted(true), []);

  // Gunakan createPortal jika sudah di client-side
  return mounted
    ? createPortal(
        <button
          onClick={togglePlay}
          className="fixed bottom-8 right-8 z-[9999] w-16 h-16 bg-[var(--color-accent-2)]/80 backdrop-blur-sm text-[var(--color-primary)] rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--color-accent-2)] transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isPlaying ? "pause" : "play"}
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
            </motion.div>
          </AnimatePresence>
        </button>,
        document.body
      )
    : null;
};

export default FloatingButton;