import InsuranceThumbnail from "@/../public/assets/business-logos/insurance thumbnail.png";
import Image from "next/image";

export default function InsuranceBankingHero() {
  return (
    <div className="relative mx-auto flex w-[90%] max-w-sm flex-col items-center justify-center md:max-w-screen-2xl md:py-20">
      <section className="flex w-full flex-wrap items-center justify-evenly gap-6 py-12 md:gap-20">
        <div className="w-full md:w-1/3">
          <h1 className="text-pretty pb-4 text-3xl/tight font-medium md:self-start md:pb-7 md:text-5xl/tight lg:text-6xl/tight">
            {"AI Marketing System for Insurers"}
          </h1>
          <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            <div className="flex w-full flex-col justify-between gap-4 md:gap-7">
              <span className="text-base text-white/80 md:max-w-md md:pt-5 md:text-lg">
                Empower every agent with daily, personalized, IRDAI-compliant content while your brand retains full control, compliance oversight, and messaging quality across thousands of distributed agents.
              </span>
              <div className="flex max-w-min flex-col space-y-4 divide-y whitespace-nowrap">
                {[
                  "IRDAI-Aligned Always",
                  "Daily Agent Activation",
                  "Centralized Brand Control",
                ].map((text, key) => (
                  <p key={key} className="flex items-center gap-4 pt-4">
                    <span className="font-light md:text-xl">{text}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Image
          className="w-full max-w-2xl rounded-3xl md:w-2/5"
          src={InsuranceThumbnail}
          sizes="(max-width: 768px) 100vw, (max-width: 1536px) 40vw"
          alt="Insurance Marketing"
        />
      </section>
    </div>
  );
}
