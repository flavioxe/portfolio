"use client";

export { ProjectList };

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useMemo, useRef, useState, type MutableRefObject } from "react";
import {
  motion,
  type MotionValue,
  type PanInfo,
  type Transition,
  useMotionValue,
  useTransform,
} from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { I18nContext } from "../contexts/I18nContext";

export interface Project {
  name: string;
  url: string;
  desc: string;
  techs: string[];
  year: number;
  image: string;
}

interface ProjectListProps {
  projects?: Project[];
  className?: string;
}

interface CarouselCardProps {
  item: Project;
  index: number;
  itemWidth: number;
  trackItemOffset: number;
  x: MotionValue<number>;
  transition: Transition;
  ctaLabel: string;
  dragIntentRef: MutableRefObject<boolean>;
}

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const CONTAINER_PADDING = 16;
const SPRING_OPTIONS: Transition = { type: "spring", stiffness: 300, damping: 30 };

function CarouselCard({
  item,
  index,
  itemWidth,
  trackItemOffset,
  x,
  transition,
  ctaLabel,
  dragIntentRef,
}: CarouselCardProps) {
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ];
  const rotateY = useTransform(x, range, [18, 0, -18], { clamp: false });
  const scale = useTransform(x, range, [0.94, 1, 0.94], { clamp: false });

  return (
    <motion.div
      className="relative shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-neutral-950 cursor-grab active:cursor-grabbing"
      style={{ width: itemWidth, height: "100%", rotateY, scale }}
      transition={transition}
    >
      <Link
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block h-full w-full"
        draggable={false}
        onDragStart={(event) => event.preventDefault()}
        onClick={(event) => {
          if (!dragIntentRef.current) return;
          event.preventDefault();
          event.stopPropagation();
          dragIntentRef.current = false;
        }}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          draggable={false}
          sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1280px) 78vw, 820px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08)_0%,rgba(10,10,10,0.46)_36%,rgba(10,10,10,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 flex h-full flex-col justify-end p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/70">
            <span>{item.year}</span>
            <span className="h-1 w-1 rounded-full bg-white/35" />
            <span>{item.techs.join(" • ")}</span>
          </div>
          <h3 className="max-w-[18rem] text-[1.55rem] leading-tight text-white">{item.name}</h3>
          <p className="mt-3 max-w-[18rem] text-sm leading-6 text-white/72">{item.desc}</p>
          <span className="mt-5 inline-flex w-fit items-center border-b border-white/40 pb-1 text-xs uppercase tracking-[0.22em] text-white transition-colors duration-200 group-hover:border-white group-hover:text-white/80">
            {ctaLabel}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function ProjectCarousel({ items, ctaLabel }: { items: Project[]; ctaLabel: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const dragIntentRef = useRef(false);
  const [frameWidth, setFrameWidth] = useState(330);
  const initialPosition = items.length > 1 ? 1 : 0;
  const initialItemWidth = 330 - CONTAINER_PADDING * 2;
  const initialTrackItemOffset = initialItemWidth + GAP;
  const [position, setPosition] = useState(initialPosition);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const x = useMotionValue(-initialPosition * initialTrackItemOffset);

  useEffect(() => {
    if (!frameRef.current) return;

    const element = frameRef.current;
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      setFrameWidth(entry.contentRect.width);
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const availableWidth = Math.max(frameWidth - CONTAINER_PADDING * 2, 0);
  const itemWidth = frameWidth < 640 ? availableWidth : availableWidth * 0.88;
  const sidePadding = Math.max((availableWidth - itemWidth) / 2, 0);
  const trackItemOffset = itemWidth + GAP;

  const itemsForRender = useMemo(() => {
    if (items.length <= 1) return items;
    return [items[items.length - 1], ...items, items[0]];
  }, [items]);

  useEffect(() => {
    if (items.length <= 1 || isHovered) return undefined;

    const timer = window.setInterval(() => {
      setPosition((previous) => Math.min(previous + 1, itemsForRender.length - 1));
    }, 10000);

    return () => window.clearInterval(timer);
  }, [isHovered, items.length, itemsForRender.length]);

  const effectiveTransition: Transition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (items.length <= 1) {
      setIsAnimating(false);
      return;
    }

    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition((previous) => {
      const next = previous + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const activeIndex =
    items.length <= 1 ? 0 : (position - 1 + items.length) % items.length;

  return (
    <div
      ref={frameRef}
      className="relative mx-auto h-[20rem] w-full max-w-full sm:h-[22rem] lg:h-[24rem]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 rounded-[32px] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
      <div className="relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm">
        <motion.div
          className="flex h-full"
          drag={isAnimating ? false : "x"}
          dragElastic={0.06}
          style={{
            gap: `${GAP}px`,
            paddingLeft: `${sidePadding}px`,
            paddingRight: `${sidePadding}px`,
            perspective: 1200,
            perspectiveOrigin: `${sidePadding + position * trackItemOffset + itemWidth / 2}px 50%`,
            touchAction: "pan-y",
            x,
          }}
          onDragStart={() => {
            dragIntentRef.current = false;
          }}
          onDrag={(_event, info) => {
            if (Math.abs(info.offset.x) > 6) {
              dragIntentRef.current = true;
            }
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(position * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
        >
          {itemsForRender.map((item, index) => (
            <CarouselCard
              key={`${item.name}-${item.year}-${index}`}
              item={item}
              index={index}
              itemWidth={itemWidth}
              trackItemOffset={trackItemOffset}
              x={x}
              transition={effectiveTransition}
              ctaLabel={ctaLabel}
              dragIntentRef={dragIntentRef}
            />
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center">
          <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-md">
            {items.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Go to ${item.name}`}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  activeIndex === index ? "w-6 bg-white" : "w-2.5 bg-white/30 hover:bg-white/55"
                }`}
                onClick={() => setPosition(items.length > 1 ? index + 1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectList = ({ projects, className = "" }: ProjectListProps) => {
  const { t, locale } = useContext(I18nContext);
  const ctaLabel = locale === "pt" ? "Ver projeto" : "Open project";

  let localizedProjects: Project[] = projects ?? [];
  const rawProjects = t("projects");
  if (Array.isArray(rawProjects)) localizedProjects = rawProjects as Project[];

  if (!Array.isArray(localizedProjects) || localizedProjects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className={`w-full ${className}`}>
      <BlurFade inView delay={0.1}>
        <div className="flex w-full flex-col gap-6">
          <div className="flex w-full items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                {locale === "pt" ? "Projetos selecionados" : "Selected projects"}
              </p>
            </div>
          </div>

          <ProjectCarousel items={localizedProjects} ctaLabel={ctaLabel} />
        </div>
      </BlurFade>
    </section>
  );
};