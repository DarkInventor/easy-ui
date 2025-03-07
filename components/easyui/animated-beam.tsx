'use client';

import React, { forwardRef, useRef, useEffect, useId, useState, RefObject } from 'react';
import { motion } from 'framer-motion';

// Utility function for class names
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

// Icons object with SVG logos
const Icons = {
  image1: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  image2: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  image3: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M3 3h18v18H3V3z" fill="#3178C6" />
      <path d="M17.2 15.2v2.4c.4.2.7.4 1.2.5.4.1.9.2 1.4.2.5 0 .9-.1 1.3-.2.4-.1.7-.3 1-.6.3-.2.5-.5.6-.9.1-.3.2-.7.2-1.1 0-.3 0-.6-.1-.9-.1-.2-.2-.5-.4-.7-.2-.2-.4-.4-.7-.6-.3-.2-.6-.4-1-.6-.3-.2-.6-.3-.8-.4-.2-.1-.4-.3-.6-.4-.1-.1-.2-.3-.3-.4 0-.2-.1-.3-.1-.5 0-.2 0-.3.1-.5.1-.1.2-.2.3-.3.1-.1.3-.2.5-.2.2-.1.4-.1.7-.1.2 0 .4 0 .6.1.2 0 .4.1.6.2.2.1.4.2.6.3.2.1.4.2.6.4v-2.2c-.3-.1-.7-.2-1-.3-.4-.1-.8-.1-1.3-.1-.5 0-.9.1-1.3.2-.4.1-.8.3-1.1.6-.3.2-.5.5-.7.9-.2.4-.3.8-.3 1.3 0 .7.2 1.3.6 1.8.4.5 1 .9 1.8 1.3.3.2.6.3.9.5.3.1.5.3.6.4.2.1.3.3.3.4.1.1.1.3.1.4 0 .1 0 .3-.1.4-.1.1-.1.2-.3.3-.1.1-.3.1-.4.2-.2 0-.4.1-.6.1-.5 0-1-.1-1.5-.3-.4 0-.9-.3-1.3-.6zm-4.8-3.3h2.9v-2h-8.1v2h2.9v8.2h2.3v-8.2z" fill="#fff" />
    </svg>
  ),
  image4: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.81 9.24 12.41 9.85C13.39 10.85 14.5 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.19 8.76 16.59 8.15C15.61 7.15 14.5 6 12 6ZM7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.81 15.24 7.41 15.85C8.39 16.85 9.5 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.19 14.76 11.59 14.15C10.61 13.15 9.5 12 7 12Z" fill="#06B6D4" />
    </svg>
  ),
  image5: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" fill="#000" />
    </svg>
  ),
  image6: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#61DAFB" />
      <path d="M12 9.86c-4.08 0-7.72 1.88-9.64 4.64C4.28 17.26 7.92 19.14 12 19.14c4.08 0 7.72-1.88 9.64-4.64-1.92-2.76-5.56-4.64-9.64-4.64zm0 8.28c-3.36 0-6.36-1.48-8-3.64 1.64-2.16 4.64-3.64 8-3.64s6.36 1.48 8 3.64c-1.64 2.16-4.64 3.64-8 3.64z" fill="#61DAFB" />
      <path d="M12 4.5c-4.08 0-7.72 1.88-9.64 4.64C4.28 11.9 7.92 13.78 12 13.78c4.08 0 7.72-1.88 9.64-4.64C19.72 6.38 16.08 4.5 12 4.5zm0 8.28c-3.36 0-6.36-1.48-8-3.64 1.64-2.16 4.64-3.64 8-3.64s6.36 1.48 8 3.64c-1.64 2.16-4.64 3.64-8 3.64z" fill="#61DAFB" />
    </svg>
  ),
  image7: () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
    </svg>
  ),
};

// AnimatedBeam component
interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>;
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  dotted?: boolean;
  dotSpacing?: number;
}

const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = 'gray',
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = '#4d40ff',
  gradientStopColor = '#4043ff',
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  dotted = false,
  dotSpacing = 6,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState('');
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const strokeDasharray = dotted ? `${dotSpacing} ${dotSpacing}` : 'none';
  const gradientCoordinates = reverse
    ? {
        x1: ['90%', '-10%'],
        x2: ['100%', '0%'],
        y1: ['0%', '0%'],
        y2: ['0%', '0%'],
      }
    : {
        x1: ['10%', '110%'],
        x2: ['0%', '100%'],
        y1: ['0%', '0%'],
        y2: ['0%', '0%'],
      };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    updatePath();

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <svg
      fill='none'
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns='http://www.w3.org/2000/svg'
      className={cn('pointer-events-none absolute left-0 top-0 transform-gpu stroke-2', className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap='round'
        strokeDasharray={strokeDasharray}
      />
      <motion.path
        d={pathD}
        stroke={`url(#${id})`}
        strokeLinecap='round'
        strokeDasharray={strokeDasharray}
        initial={{
          strokeWidth: pathWidth,
          strokeOpacity: 0,
        }}
        animate={{
          strokeWidth: pathWidth * 1.5,
          strokeOpacity: 1,
        }}
        transition={{
          duration: 2,
          delay: delay,
        }}
      />
      <defs>
        <motion.linearGradient className='transform-gpu'
          id={id}
          gradientUnits={'userSpaceOnUse'}
          initial={{
            x1: '0%',
            x2: '0%',
            y1: '0%',
            y2: '0%',
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity='0'></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset='32.5%' stopColor={gradientStopColor}></stop>
          <stop offset='100%' stopColor={gradientStopColor} stopOpacity='0'></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

// Circle component with responsive sizing
const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'z-10 flex items-center justify-center rounded-full border-2 bg-white dark:bg-gray-300 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
          'w-8 h-8 p-2 sm:w-10 sm:h-10 sm:p-2.5 md:w-12 md:h-12 md:p-3', // Responsive sizes
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Circle.displayName = 'Circle';

// Main AnimatedBeamDemo component with responsive layout
interface AnimatedBeamDemoProps {
  className?: string;
  icons?: typeof Icons;
  beamColor?: string;
  beamSpeed?: number;
}

export const AnimatedBeamDemo: React.FC<AnimatedBeamDemoProps> = ({ 
  className, 
  icons = Icons, 
  beamColor = '#4d40ff', 
  beamSpeed = 3 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        'relative flex w-full max-w-[500px] mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background',
        'p-4 sm:p-6 md:p-10 md:shadow-xl', // Responsive padding
        className
      )}
      ref={containerRef}
    >
      <div className='flex h-full w-full flex-row items-stretch justify-between gap-3 sm:gap-6 md:gap-10'>
        <div className='flex flex-col justify-center'>
          <Circle ref={div7Ref}>
            {icons.image1()}
          </Circle>
        </div>
        <div className='flex flex-col justify-center'>
          <Circle 
            ref={div6Ref} 
            className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14' // Larger circle with responsive sizing
          >
            {icons.image2()}
          </Circle>
        </div>
        <div className='flex flex-col justify-center gap-1 sm:gap-1.5 md:gap-2'>
          <Circle ref={div1Ref}>
            {icons.image3()}
          </Circle>
          <Circle ref={div2Ref}>
            {icons.image4()}
          </Circle>
          <Circle ref={div3Ref}>
            {icons.image5()}
          </Circle>
          <Circle ref={div4Ref}>
            {icons.image6()}
          </Circle>
          <Circle ref={div5Ref}>
            {icons.image7()}
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} duration={beamSpeed} gradientStartColor={beamColor} gradientStopColor={beamColor} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} duration={beamSpeed} gradientStartColor={beamColor} gradientStopColor={beamColor} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} duration={beamSpeed} gradientStartColor={beamColor} gradientStopColor={beamColor} />
      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} duration={beamSpeed} gradientStartColor={beamColor} gradientStopColor={beamColor} />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} duration={beamSpeed} gradientStartColor={beamColor} gradientStopColor={beamColor} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} duration={beamSpeed} gradientStartColor={beamColor} gradientStopColor={beamColor} />
    </div>
  );
};