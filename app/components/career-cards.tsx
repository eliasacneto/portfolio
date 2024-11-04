"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface CareerCardProps {
  titleKey: string;
  descriptionKey: string;
  info: string;
  responsibilities: string[];
}

function CareerCard({
  titleKey,
  descriptionKey,
  responsibilities,
  info,
}: CareerCardProps) {
  const t = useTranslations("career");

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-8 md:py-16">
      <div className="flex flex-col gap-4 md:gap-8">
        <header className="flex flex-col gap-4">
          <h1 className="text-h4">{t(titleKey)}</h1>
          <span className="text-sm md:text-lg font-bold opacity-60">
            {t(info)}
          </span>
        </header>
        <ul className="flex w-full flex-wrap gap-2">
          {responsibilities.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 h-8 px-4 bg-[#090909] rounded-full"
            >
              <Check className="text-primary-blue scale-75 md:scale-100" />
              <span className="text-xs sm:text-sm md:text-base opacity-60">
                {t(`responsibilities.${item}`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-sm md:text-base opacity-80">{t(descriptionKey)}</p>
    </div>
  );
}

export function CareerCards() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const cards = [
    {
      titleKey: "realm.title",
      info: "realm.info",
      responsibilities: ["projectManagement", "reactNative", "apis", "nextjs"],
      descriptionKey: "realm.description",
    },
    {
      titleKey: "dnc.title",
      info: "dnc.info",
      responsibilities: [
        "uiux",
        "mobile",
        "figma",
        "landingPages",
        "apis",
        "nextjs",
      ],
      descriptionKey: "dnc.description",
    },
    {
      titleKey: "codeRealm.title",
      info: "codeRealm.info",
      responsibilities: ["uiux", "mobile", "figma", "landingPages"],
      descriptionKey: "codeRealm.description",
    },
    {
      titleKey: "wizard.title",
      info: "wizard.info",
      responsibilities: ["pnl", "rapport", "grammar"],
      descriptionKey: "wizard.description",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-4">
      {cards.map((card, idx) => (
        <motion.div
          onMouseEnter={() => setHoveredIndex(idx)}
          animate={{
            backgroundColor: hoveredIndex === idx ? "#050509" : "",
          }}
          key={"card" + idx}
          className="w-full border border-white/15 rounded-2xl relative overflow-hidden"
        >
          <motion.div
            initial={{
              bottom: 0,
              top: 0,
              opacity: 0,
              width: 1,
              position: "absolute",
            }}
            animate={{
              opacity: hoveredIndex === idx ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="bg-gradient-to-r from-primary-green to-primary-blue"
          />
          <CareerCard
            key={card.titleKey}
            titleKey={card.titleKey}
            info={card.info}
            responsibilities={card.responsibilities}
            descriptionKey={card.descriptionKey}
          />
        </motion.div>
      ))}
    </div>
  );
}
