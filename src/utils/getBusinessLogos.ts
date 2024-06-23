import path from "path";
import fs from "fs";

const getBusinessLogos = () => {
  const logosDirPath = path.join(
    process.cwd(),
    "public",
    "assets",
    "business-logos",
  );
  try {
    const imageFiles = fs.readdirSync(logosDirPath);
    
    const imageSrcs = imageFiles.map((file) => ({
      src: `/assets/business-logos/${file}`,
      alt: file.replace(/\.[^/.]+$/, ""),
    }));

    return imageSrcs;
  } catch (error) {
    console.error("Error reading business logos directory:", error);
    return [];
  }
};

export default getBusinessLogos;
