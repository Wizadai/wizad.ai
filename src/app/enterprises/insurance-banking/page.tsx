import InsuranceBankingHero from "./_elements/InsuranceBankingHero";
import InsuranceFeatureTiles from "./_elements/InsuranceFeatureTiles";
import InsuranceDescription from "./_elements/InsuranceDescription";
import InsuranceCallToAction from "./_elements/InsuranceCallToAction";
import InsuranceBusinessLogos from "./_elements/InsuranceBusinessLogos";
import InsuranceFooter from "./_elements/InsuranceFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing System for Insurers | Wizad",
  description: "Empower every agent with daily, personalized, IRDAI-compliant content while your brand retains full control, compliance oversight, and messaging quality across thousands of distributed agents.",
  robots: {
    googleBot: {
      noimageindex: true,
    },
  },
};

export default function InsuranceBankingPage() {
  return (
    <>
      <InsuranceBankingHero />
      <InsuranceDescription />
      <InsuranceFeatureTiles />
      <InsuranceCallToAction />
      <InsuranceBusinessLogos />
      <InsuranceFooter />
    </>
  );
}
