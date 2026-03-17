import { BlurFade } from "@/components/ui/blur-fade"
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { Accordion05 } from "@/components/ui/accordion-05";

export function BlurFadeTextDemo() {
  return (
    <section id="header">
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Hello World
        </h2>
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
          Nice to meet you
        </span>
      </BlurFade>
    </section>
  )
}

export function DefaultSmokeBackgroundDemo() {
  return <SmokeBackground />;
}

export function CustomizedSmokeBackgroundDemo() {
  return <SmokeBackground smokeColor="#ff0000" />;
}

export function Accordion05Demo() {
  return <Accordion05 />;
}