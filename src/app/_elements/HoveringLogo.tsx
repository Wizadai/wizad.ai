"use client";

export default function HoveringLogo({ children, logo }: { children: React.ReactNode, logo: React.ReactNode }) {
  return (
    <div className="relative w-full">
      <div className={`absolute left-0 right-0 mx-auto w-[40%]`}>
        {logo}
      </div>
      {children}
    </div>
  );
}