"use client";

import Image from "next/image";
import { CloseOutline, ReorderThreeOutline } from "react-ionicons";
import { useState } from "react";
import MenuItems, { MenuItem } from "../menu-items/menu-items";

export const menuItemsData: MenuItem[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Services',
    url: '/services',
    submenu: [
      {
        title: 'Heating',
        url: '/services/heating',
      },
      {
        title: 'Cooling',
        url: '/services/cooling',
      },
      {
        title: 'Ductless',
        url: '/services/ductless',
      },
    ],
  },
  {
    title: 'Products',
    url: '/products',
    submenu: [
      {
        title: 'Mitsubishi',
        url: '/products/mitsubishi',
      },
      {
        title: 'American Standard',
        url: '/products/american-standard',
      },
      {
        title: 'NYSERDA',
        url: '/products/nyserda',
      },
    ],
  },
  {
    title: 'Financing',
    url: '/financing',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <nav className="w-full shadow-lg dark:shadow-white">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <Image
                src={"/CMMechanical_logo.png"}
                width={250}
                height={250}
                alt="C&M Mechanical Logo"
                className="my-0 mx-auto"
              />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNav(!nav)}
              >
                {nav ? (
                  <CloseOutline
                    color={"#25368A"}
                    title={"close"}
                    height="30px"
                    width="30px"
                  />
                ) : (
                  <ReorderThreeOutline
                    color={"#25368A"}
                    title={"open"}
                    height="30px"
                    width="30px"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              nav ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {menuItemsData.map((menu, index) => {
                return <MenuItems items={menu} key={index} />
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
