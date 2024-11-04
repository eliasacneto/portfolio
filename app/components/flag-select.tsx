"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const locales = ["en", "pt", "es"];

export function FlagSelect({
  mobile = false,
  defaultFlag = "usa",
}: {
  mobile?: boolean;
  defaultFlag?: "brazil" | "usa" | "spain";
}) {
  if (mobile) {
    return (
      <div className="flex items-center gap-4">
        <Link href="/pt">
          <Image
            src={`/icons/brazil.svg`}
            alt="Brazil flag"
            width={32}
            height={32}
          />
        </Link>
        <Link href="/en">
          <Image src={`/icons/usa.svg`} alt="USA flag" width={32} height={32} />
        </Link>
        <Link href="/es">
          <Image
            src={`/icons/spain.svg`}
            alt="USA flag"
            width={32}
            height={32}
          />
        </Link>
      </div>
    );
  }
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const handleChange = (newLocale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, "");
    router.push(`/${newLocale}${newPathname}`);
  };
  return (
    <div className="hidden lg:block group relative  ">
      <select
        onChange={(e) => handleChange(e.target.value)}
        value={currentLocale}
        className="bg-transparent rounded px-2 py-1 text-white "
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale === "en" ? "🇺🇸" : locale === "pt" ? "🇧🇷" : "🇪🇸"}
          </option>
        ))}
      </select>
      {/* <Image
        src={`/icons/${defaultFlag}.svg`}
        alt={defaultFlag}
        width={24}
        height={24}
      />
      <div className="absolute bottom-0 opacity-0 group-hover:-bottom-12 group-hover:opacity-100 transition-all duration-300">
        <div className="w-8 h-8 bg-secondary flex items-center justify-center rounded">
          <Link href={defaultFlag === "usa" ? "/en" : "/"}>
            <Image
              src={`/icons/${defaultFlag === "brazil" ? "usa" : "brazil"}.svg`}
              alt={defaultFlag === "brazil" ? "usa" : "brazil"}
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div> */}
    </div>
  );
}
