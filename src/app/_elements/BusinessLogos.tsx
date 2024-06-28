import getBusinessLogos from "@/utils/getBusinessLogos";
import BusinessLogosWrapper from "./BusinessLogosWrapper";
import LogoImage from "./LogoImage";

export default function BusinessLogos() {
  const businessLogos = getBusinessLogos();

  return (
    <BusinessLogosWrapper options={{ loop: true }}>
      {businessLogos.map((logo, index) => (
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
  );
}
