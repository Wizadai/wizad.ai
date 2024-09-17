import getBusinessLogos from "@/utils/getBusinessLogos";
import BusinessLogosWrapper from "@/app/_elements/BusinessLogosWrapper";
import LogoImage from "@/app/_elements/LogoImage";

export default function BusinessLogos() {
  const businessLogos = getBusinessLogos();

  return (
    <BusinessLogosWrapper options={{ loop: true }}>
      {businessLogos.map((logo, index) => (
        // @ts-ignore
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
