import getBusinessLogos from "@/utils/getBusinessLogos";
import BusinessLogosWrapper from "./BusinessLogosWrapper";
import Image from "next/image";

export default function BusinessLogos() {
  const businessLogos = getBusinessLogos();

  return (
    <BusinessLogosWrapper 
    options={{ loop: true }}
    >
      {businessLogos.map((logo, index) => (
        <Image
          className="aspect-video"
          key={index}
          src={logo.src}
          alt={logo.alt}
          height={120}
          width={160}
          loading="eager"
          style={{ objectFit: "contain" }}
        />
      ))}
    </BusinessLogosWrapper>
  );
}
