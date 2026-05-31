"use client";

import Image from 'next/image';
import Link from 'next/link';
import AnimatedContent from './components/AnimatedContent/AnimatedContent';
import SplitText from './components/SplitText/SplitText';
import BlurText from './components/BlurText/BlurText';
import GradientText from './components/GradientText/GradientText';

interface FeaturedProjectCardProps {
  title: string;
  description: string;
  image: string;
  projectLink: string;
  index: number;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  title,
  description,
  image,
  projectLink,
  index,
}) => {
  return (
    <AnimatedContent
      distance={100}
      direction={index % 2 === 0 ? 'horizontal' : 'horizontal'}
      reverse={index % 2 !== 0}
      config={{ tension: 120, friction: 20 }}
      initialOpacity={0}
      animateOpacity
      threshold={0.2}
    >
      <div 
        className="
          group relative overflow-hidden rounded-2xl p-6
          bg-black/20 backdrop-blur-md 
          border border-[var(--color-accent-1)]
          transition-all duration-300 ease-in-out
          hover:scale-[1.02] hover:shadow-[0_0_30px_-10px_var(--color-accent-2)]
        "
      >
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-lg">
            <Image 
              src={image} 
              alt={title} 
              width={1200} 
              height={675} 
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-4">
            <SplitText
              text={title}
              className="text-3xl font-semibold"
              delay={50}
            />
            <BlurText
              text={description}
              className="text-[var(--color-text-soft)]"
              delay={20}
              animateBy="words"
            />
          </div>
          <Link href={projectLink} target="_blank" rel="noopener noreferrer" className="self-start mt-2">
            <GradientText className="px-6 py-3 rounded-lg text-lg font-semibold">
              View Project
            </GradientText>
          </Link>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default FeaturedProjectCard;