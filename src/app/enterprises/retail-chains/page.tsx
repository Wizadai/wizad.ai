import RetailChainsHero from "./_elements/RetailChainsHero";
import RetailFeatureTiles from "./_elements/RetailFeatureTiles";
import RetailDescription from "./_elements/RetailDescription";
import RetailCallToAction from "./_elements/RetailCallToAction";
import RetailBusinessLogos from "./_elements/RetailBusinessLogos";
import RetailFooter from "./_elements/RetailFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing System for Super market & Retail chains | Wizad",
  description: "Empower every agent with daily, personalized, IRDAI-compliant content while your brand retains full control, compliance oversight, and messaging quality across thousands of distributed agents.",
  robots: {
    googleBot: {
      noimageindex: true,
    },
  },
};

export default function RetailChainsPage() {
  return (
    <>
      <RetailChainsHero />
      <RetailDescription />
      <RetailFeatureTiles />
      <RetailCallToAction />
      <RetailBusinessLogos />
      <RetailFooter />
    </>
  );
}
