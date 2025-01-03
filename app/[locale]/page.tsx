"use client";

import { CareerCards } from "../components/career-cards";
import { ContactFormTrigger } from "../components/contact-form";
import { MovingSkills } from "../components/moving-skills";
import { NavBar } from "../components/nav-bar";
import { Projects } from "../components/projects";
import { SkillsGrid } from "../components/skills-grid";
import { TechCard } from "../components/tech-card";
import { Animate } from "../components/ui/animate";
import { Button } from "../components/ui/button";
import { FlipWords } from "../components/ui/flip-words";
import { TracingBeam } from "../components/ui/tracing-beam";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { Download, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Page() {
  const h = useTranslations("hero");
  const l = useTranslations("labels");
  const a = useTranslations("about");
  const words = ["full-stack", "mobile", "web"];
  return (
    <main className="flex flex-col w-full relative overflow-x-hidden">
      <NavBar />
      <section
        id="home"
        className="flex w-full h-[720px] sm:h-[900px] items-center justify-center relative overflow-y-hidden"
      >
        <div className="w-full max-w-[1080px] px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text-h1 h-[180px] sm:h-[120px] md:h-[272px] lg:h-[204px]">
              {h("title")}
              <FlipWords words={words} />
              {h("title2")}
            </h1>
            <Animate fromY={40} duration={0.25}>
              <div className="flex items-center gap-4">
                <div className="w-[3px] h-12 bg-gradient-to-b from-primary-green to-primary-blue rounded-full" />
                <p className="md:text-lg opacity-80">{h("subtitle1")}</p>
              </div>
            </Animate>
            <div className="flex items-center gap-4">
              <Animate direction="left" duration={0.25}>
                <a href={"/cv-eliasacneto.pdf"} download>
                  <Button variant="ghost" className="gap-2">
                    <Download /> {h("cta1")}
                  </Button>
                </a>
              </Animate>
              <Animate direction="left" duration={0.25} delay={0.25}>
                <Link href="#contact">
                  <Button>🚀 {h("cta2")}</Button>
                </Link>
              </Animate>
            </div>
          </div>
          <div className="flex h-full items-end md:pb-16">
            <div className="flex flex-col gap-1 md:ml-auto">
              <div className="flex gap-1">
                <Star fill="#FFBA34" strokeWidth={0} />
                <Star fill="#FFBA34" strokeWidth={0} />
                <Star fill="#FFBA34" strokeWidth={0} />
                <Star fill="#FFBA34" strokeWidth={0} />
                <Star fill="#FFBA34" strokeWidth={0} />
              </div>
              <span className="font-bold opacity-60 text-sm md:text-base">
                {h("fiveStars")}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute w-[670px] h-[670px] bg-primary-green blur-[150px] opacity-15 -z-10 -top-[335px]" />
      </section>
      <MovingSkills />
      <section
        className="flex w-full justify-center py-8 sm:py-16 overflow-y-hidden"
        id="projects"
      >
        <div className="flex flex-col gap-8 w-full max-w-7xl px-4">
          <Animate direction="right">
            <h1 className="text-h2">{l("projects")}</h1>
          </Animate>
          <Projects />
        </div>
      </section>
      <section
        className="flex w-full flex-col items-center overflow-y-hidden"
        id="skills"
      >
        <div className="flex w-full max-w-7xl flex-col gap-16 items-center px-4 py-8 sm:py-16">
          <Animate>
            <h1 className="text-h2">{l("skills")}</h1>
          </Animate>
          <SkillsGrid />
          <Animate direction="right" className="mr-auto">
            <h2 className="text-h3">{l("stacks")}</h2>
          </Animate>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-16 ">
            <Animate fromY={40} duration={0.25}>
              <TechCard number="01">
                <Image
                  className="mx-auto my-auto"
                  src="/techs/react.svg"
                  alt="react"
                  width={180}
                  height={80}
                />
              </TechCard>
            </Animate>
            <Animate fromY={40} duration={0.25} delay={0.25}>
              <TechCard number="02">
                <Image
                  className="mx-auto my-auto"
                  src="/techs/nextjs.svg"
                  alt="Next JS"
                  width={180}
                  height={80}
                />
              </TechCard>
            </Animate>
            <Animate fromY={40} duration={0.25} delay={0.5}>
              <TechCard number="03">
                <Image
                  className="mx-auto my-auto"
                  src="/techs/nodejs.svg"
                  alt="Node.js"
                  width={180}
                  height={80}
                />
              </TechCard>
            </Animate>
            <Animate fromY={40} duration={0.25}>
              <TechCard number="04">
                <Image
                  className="mx-auto my-auto opacity-80"
                  src="/techs/react-native.svg"
                  alt="React Native"
                  width={180}
                  height={80}
                />
              </TechCard>
            </Animate>
            <Animate fromY={40} duration={0.25} delay={0.25}>
              <TechCard number="05">
                <Image
                  className="mx-auto my-auto opacity-80"
                  src="/techs/typescript.svg"
                  alt="Typescript"
                  width={180}
                  height={80}
                />
              </TechCard>
            </Animate>
            <Animate fromY={40} duration={0.25} delay={0.5}>
              <TechCard number="06">
                <Image
                  className="mx-auto my-auto opacity-80"
                  src="/techs/mysql.svg"
                  alt="MySQL"
                  width={180}
                  height={80}
                />
              </TechCard>
            </Animate>
            <Animate fromY={40} duration={0.25}>
              <TechCard number="07">
                <Image
                  className="mx-auto my-auto"
                  src="/techs/tailwind.svg"
                  alt="Tailwind"
                  width={180}
                  height={80}
                />
              </TechCard>
            </Animate>
            <Animate fromY={40} duration={0.25} delay={0.25}>
              <TechCard number="08">
                <Image
                  className="mx-auto my-auto"
                  src="/techs/figma.svg"
                  alt="Nginx"
                  width={80}
                  height={60}
                />
              </TechCard>
            </Animate>
            <Animate fromY={40} duration={0.25} delay={0.5}>
              <TechCard number="09">
                <Image
                  className="mx-auto my-auto"
                  src="/techs/prisma.svg"
                  alt="Prisma"
                  width={180}
                  height={80}
                />
              </TechCard>
            </Animate>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="w-full flex flex-col items-center relative overflow-y-hidden"
      >
        <div className="w-full max-w-7xl px-4 py-8 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="absolute right-[40%] hidden md:block">
            <Image
              src={"/elias.jpg"}
              alt="Elias Neto"
              width={700}
              height={700}
            />
            <div className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-r from-[#010101] via-transparent to-[#010101]" />
          </div>
          <div className="md:h-[600px]">
            <div className="relative md:hidden">
              <Image
                src={"/elias.jpg"}
                alt="Elias Neto"
                width={350}
                height={350}
              />
              <div className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-r from-[#010101] via-transparent to-[#010101]" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Animate direction="left" duration={0.25}>
              <h1 className="text-h2 z-50">{l("about")}</h1>
            </Animate>
            <Animate direction="left" duration={0.5} fromX={1}>
              <p className="text-sm md:text-base opacity-80">{a("p1")}</p>
            </Animate>
            <Animate direction="left" duration={0.5} fromX={1}>
              <p className="text-sm md:text-base opacity-80">{a("p2")}</p>
            </Animate>
            <Animate direction="left" duration={0.5} fromX={1}>
              <p className="text-sm md:text-base opacity-80">{a("p3")}</p>
            </Animate>
            <Animate direction="left" duration={0.5} fromX={1}>
              <p className="text-sm md:text-base opacity-80">{a("p4")}</p>
            </Animate>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-4 opacity-60">
                <Link
                  href="https://linkedin.com/in/eliasacneto"
                  target="_blank"
                >
                  <SiLinkedin />
                </Link>
                <Link href="https://github.com/eliasacneto" target="_blank">
                  <SiGithub />
                </Link>
                <Link href="https://instagram.com/eliasacneto" target="_blank">
                  <SiInstagram />
                </Link>
              </div>
              <a href={"/cv-eliasacneto.pdf"} download>
                <Button variant="ghost" className="gap-2">
                  <Download /> {l("downloadCV")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center overflow-y-hidden">
        <div className="flex w-full max-w-7xl flex-col p-4 gap-4 sm:gap-8 md:gap-16">
          <Animate direction="right">
            <h1 className="text-h2">{l("carrer")}</h1>
          </Animate>
          <div className="flex w-full ">
            <TracingBeam className="hidden md:flex md:gap-16">
              <CareerCards />
            </TracingBeam>
            <div className="w-full flex md:hidden">
              <CareerCards />
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="w-full flex flex-col items-center overflow-y-hidden"
      >
        <div className="flex w-full max-w-7xl px-4 py-16 flex-col items-center">
          <Animate className="w-full">
            <div className="flex w-full max-w-[1080px] mx-auto flex-col items-center gap-12 md:gap-16 p-8 md:py-16 rounded-2xl border border-white/15 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-green to-primary-blue" />
              <header className="w-full flex flex-col items-center gap-8">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/elias-img.jpg"}
                    width={64}
                    height={64}
                    alt="Elias Neto"
                    className="rounded-full scale-75 lg:scale-100"
                  />
                  <span className="text-h4">Elias Neto</span>
                </div>
                <ul className="flex gap-2 flex-wrap justify-center">
                  <li className="flex items-center gap-2 px-4 h-8 bg-white/5 rounded-full">
                    <span className="text-xs sm:text-sm md:text-base opacity-60">
                      Front-end
                    </span>
                  </li>
                  <li className="flex items-center gap-2 px-4 h-8 bg-white/5 rounded-full">
                    <span className="text-xs sm:text-sm md:text-base opacity-60">
                      Back-end
                    </span>
                  </li>
                  <li className="flex items-center gap-2 px-4 h-8 bg-white/5 rounded-full">
                    <span className="text-xs sm:text-sm md:text-base opacity-60">
                      Mobile
                    </span>
                  </li>
                  <li className="flex items-center gap-2 px-4 h-8 bg-white/5 rounded-full">
                    <span className="text-xs sm:text-sm md:text-base opacity-60">
                      UI/UX
                    </span>
                  </li>
                </ul>
              </header>
              <p className="text-sm md:text-base opacity-80 text-center">
                {a("footer")}
              </p>
              <div className="flex flex-col gap-4 items-center">
                <ContactFormTrigger>
                  <Button className="font-bold transition-all duration-500">
                    🚀 {h("hire")}
                  </Button>
                </ContactFormTrigger>
              </div>
            </div>
          </Animate>
        </div>
      </section>
    </main>
  );
}
