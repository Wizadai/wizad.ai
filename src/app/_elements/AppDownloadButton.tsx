import Image from "next/image";

import AppStoreDownload from "@/../public/assets/download-appstore.svg";
import PlayStoreDownload from "@/../public/assets/download-playstore.webp";

const StoreButton = {
  appstore: AppStoreDownload,
  playstore: PlayStoreDownload,
};

export const StoreLinks = {
  appstore: process.env.NEXT_PUBLIC_APP_APPSTORE_URL!,
  playstore: process.env.NEXT_PUBLIC_APP_PLAYSTORE_URL!,
};

type Store = keyof typeof StoreButton;

export default function AppDownloadButton({ store }: { store: Store }) {
  return (
    <a
      href={StoreLinks[store]}
      target="_blank"
      rel="noopener"
      className="transform rounded-2xl bg-white/10 p-2 shadow shadow-gray-600 transition-transform duration-500 hover:scale-110 md:p-4"
    >
      <Image
        src={StoreButton[store]}
        height={54}
        alt={`Download from ${
          {
            appstore: "Apple App Store",
            playstore: "Google Play Store",
          }[store]
        }`}
      />
    </a>
  );
}
