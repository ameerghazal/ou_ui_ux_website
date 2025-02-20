import React from "react";
import Image from "next/image";
import { navItems } from "../data";
import { INavItem } from "../data/interface";

const Header = () => {
  return (
    <div className="bg-[#2E2838] p-4 grid grid-cols-[1fr_2fr_1fr] justify-between w-3/4 rounded-[18px]">
      <div className="flex items-center justify-start gap-2 w-full">
        <Image
          src={"/logos/hero-image.svg"}
          alt={"UX Logo"}
          width={32}
          height={32}
        />
        <span className="font-extrabold text-2xl">UX CLUB</span>
      </div>

      <div className="flex items-center justify-center w-full">
        <ul className="flex gap-8 items-center list-none">
          {navItems.map((item: INavItem, i: number) => (
            <li key={i} className="text-lg font-normal">
              <button className="">{item.title}</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-end w-full">
        <Image
          src={"/logos/ou-logo.svg"}
          alt={"OU Logo"}
          className="w-fit h-fit"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};

export default Header;
