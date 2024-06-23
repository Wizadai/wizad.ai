import getBusinessLogos from "@/utils/getBusinessLogos";
import BusinessLogosWrapper from "./BusinessLogosWrapper";
import Image from "next/image";

export default function BusinessLogos() {
  const businessLogos = getBusinessLogos();

  return (
    <BusinessLogosWrapper>
      {businessLogos.map((logo, index) => (
        <Image
          key={index}
          src={logo.src}
          alt={logo.alt}
          height={120}
          width={160}
          style={{ objectFit: "contain" }}
        />
      ))}
    </BusinessLogosWrapper>
  );
}
