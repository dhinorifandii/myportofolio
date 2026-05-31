"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

interface ProfileCardProps {
  name: string;
  title: string;
  handle: string;
  status: string;
  contactText: string;
  avatarUrl: string;
  showUserInfo: boolean;
  enableTilt: boolean;
  enableMobileTilt: boolean;
  onContactClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  handle,
  status,
  contactText,
  avatarUrl,
  showUserInfo,
  enableTilt,
  enableMobileTilt,
  onContactClick,
}) => {
  const cardContent = (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      className="
        w-full max-w-sm p-8 rounded-2xl
        bg-[var(--color-primary)]/50 backdrop-blur-lg
        border border-[var(--color-accent-1)]/20
        shadow-lg shadow-black/20
      "
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <Image
            src={avatarUrl}
            alt={name}
            width={128}
            height={128}
            className="rounded-full border-4 border-[var(--color-accent-2)] object-cover"
          />
          <div className={`
            absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-[var(--color-primary)]
            ${status === 'Online' ? 'bg-green-500' : 'bg-gray-500'}
          `}></div>
        </div>
        
        {showUserInfo && (
          <>
            <h2 className="text-3xl font-bold text-white">{name}</h2>
            <p className="text-lg text-[var(--color-accent-2)] font-semibold">{title}</p>
            <p className="text-md text-[var(--color-text-soft)] mb-6">@{handle}</p>
          </>
        )}

        <button
          onClick={onContactClick}
          className="
            px-8 py-3 rounded-xl text-lg font-semibold text-white
            bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)]
            transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-[0_0_20px_var(--color-accent-1)]
          "
        >
          {contactText}
        </button>
      </div>
    </motion.div>
  );

  if (enableTilt) {
    return (
      <Tilt
        tiltEnable={enableTilt}
        scale={1.05}
        transitionSpeed={1000}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="var(--color-accent-2)"
        glarePosition="all"
        className="w-full max-w-sm"
      >
        {cardContent}
      </Tilt>
    );
  }

  return cardContent;
};

export default ProfileCard;
