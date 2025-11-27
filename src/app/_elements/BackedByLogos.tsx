import BusinessLogosWrapper from "@/app/_elements/BusinessLogosWrapper";
import LogoImage from "@/app/_elements/LogoImage";

export default function BackedByLogos() {
  const logos = [
    { src: "/assets/business-logos/backed_by_logos/AWS.png", alt: "AWS" },
    { src: "/assets/business-logos/backed_by_logos/GOOGLE.png", alt: "Google" },
    { src: "/assets/business-logos/backed_by_logos/Microsoft.png", alt: "Microsoft" },
    { src: "/assets/business-logos/backed_by_logos/NVIDIA.png", alt: "Nvidia" },
    { src: "/assets/business-logos/backed_by_logos/DPIIT.png", alt: "DPIIT" },
    { src: "/assets/business-logos/backed_by_logos/KSUM.png", alt: "KSUM" },
    { src: "/assets/business-logos/backed_by_logos/TAIM.png", alt: "T-AIM" },
    { src: "/assets/business-logos/backed_by_logos/10kstartups.png", alt: "10KStartups" },
  ];

  return (
    <section className="flex w-full max-w-screen-xl flex-col gap-8 overflow-clip px-4 py-12 md:gap-20 md:px-20 md:py-32">
      <div className="flex flex-col items-center justify-center gap-8 text-white/70">
        <span className="mb-20 text-sm font-medium text-center md:mb-0 md:text-xl">
          Backed by
        </span>
        <BusinessLogosWrapper options={{ loop: true }}>
          {logos.map((logo, index) => (
            <LogoImage
              className="aspect-video"
              key={index}
              src={logo.src}
              alt={logo.alt}
              height={120}
              width={160}
              style={{ objectFit: "contain" }}
            />
          ))}
        </BusinessLogosWrapper>
      </div>
    </section>
  );
}
