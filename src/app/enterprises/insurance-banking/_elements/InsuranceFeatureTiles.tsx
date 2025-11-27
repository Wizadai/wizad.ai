import { ReactNode } from "react";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaPiggyBank } from "react-icons/fa6";
import { TbCardsFilled } from "react-icons/tb";

export default function InsuranceFeatureTiles() {
  return (
    <section className="flex w-full max-w-screen-xl flex-col gap-8 overflow-clip px-4 py-12 md:gap-20 md:px-20 md:py-32">
      <div className="flex w-full flex-col gap-7 xl:flex-row xl:gap-20">
        <FeatureTile
          icon={<BiSolidTimeFive />}
          title="IRDAI-Safe Communication"
          desc="Wizad prevents misinformation by ensuring agents publish only compliant, pre-approved content, with admins controlling assets and poster types from a single platform."
        />
        <FeatureTile
          icon={<TbCardsFilled />}
          title="Daily Agent Activation"
          desc="Agents receive personalized content daily on WhatsApp, enabling consistent posting habits and stronger customer engagement without requiring design skills or technical knowledge."
        />
        <FeatureTile
          icon={<FaPiggyBank />}
          title="Centralized Brand Control"
          desc="Your brand team controls assets, messaging, colors, and permissions, ensuring every agent's communication remains aligned, professional, and instantly updated across the organization."
        />
      </div>
    </section>
  );
}

const FeatureTile = ({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-1 flex-col gap-1 border-t border-white/80 pt-5 md:pt-8">
      <div className="w-full md:w-[85%]">
        <div className="pb-2 text-2xl">{icon}</div>
        <h2 className="pb-4 font-hero text-2xl font-semibold italic md:text-nowrap">
          {title}
        </h2>
        <span className="font-light text-white/80 md:text-lg">{desc}</span>
      </div>
    </div>
  );
};
