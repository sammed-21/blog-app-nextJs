"use client";

import React from "react";
import Image from "next/image";

const icons: any = [
  {
    id: 1,
    src: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
    alt: "Ethereum",
    className: "w-16 h-16 absolute top-[20%] right-[30%] animate-float-slow",
  },
  {
    id: 2,
    src: "https://cryptologos.cc/logos/uniswap-uni-logo.svg",
    alt: "Uniswap",
    className: "w-14 h-14 absolute top-[40%] right-[15%] animate-float-medium",
  },
  {
    id: 3,
    src: "https://cryptologos.cc/logos/chainlink-link-logo.svg",
    alt: "Chainlink",
    className: "w-12 h-12 absolute top-[10%] right-[20%] animate-float-fast",
  },
  {
    id: 4,
    src: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
    alt: "Bitcoin",
    className: "w-20 h-20 absolute top-[60%] right-[25%] animate-float-slower",
  },
  {
    id: 5,
    src: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
    alt: "Polygon",
    className: "w-16 h-16 absolute top-[30%] right-[40%] animate-float-medium",
  },
];

export function FloatingIcons() {
  return (
    <div className="relative min-h-screen w-full bg-[#F8FAFF] overflow-hidden">
      <div className="max-w-[1400px] mx-auto h-screen flex items-center">
        {/* Left Content Section */}
        <div className="flex-1 p-12 space-y-8">
          <div className="space-y-4">
            <h1 className="text-7xl font-bold text-[#4F46E5] leading-tight tracking-tight">
              Derived from a
              <br />
              Comprehensive
              <br />
              Defi Data Stream
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-gray-600">
              Protocols can choose to prioritize the weights of certain data
              sources based on their use case, protocols can also access
              sectional scores from each defi category
            </p>
          </div>
        </div>

        {/* Right Floating Icons Section */}
        <div className="relative flex-1 h-screen">
          <div className="absolute inset-0">
            {icons.map((icon: any) => (
              <div key={icon.id} className={icon.className}>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
