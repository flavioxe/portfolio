import { FC } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

interface HeroProps {
  name: string;
  role: string;
  className?: string;
}

const Hero: FC<HeroProps> = ({ name, role, className = "" }) => {
  return (
    <div className={`flex flex-col gap-2 md:flex-row md:items-end md:gap-3 ${className}`}>
      <BlurFade delay={0.05} inView>
        <h1 className="text-4xl font-semibold leading-relaxed text-foreground font-sans md:text-5xl">{name}</h1>
      </BlurFade>
      <BlurFade delay={0.14} inView>
        <span className="text-lg font-mono leading-relaxed text-muted md:pb-2 md:text-xl">{role}</span>
      </BlurFade>
    </div>
  );
};

export default Hero;
