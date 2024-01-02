import { useState } from "react";
import Dropdown from "../dropdown/dropdown";

export interface MenuItem {
    title: string;
    url: string;
    submenu?: {
        title: string;
        url: string;
    }[];
}

export interface MenuItemsProps {
    items: {
        title: string;
        url: string;
        submenu?: {
            title: string;
            url: string;
        }[];
    };
}

export default function MenuItems({ items }: MenuItemsProps) {
    const [dropdown, setDropdown] = useState(false); 
    
    return (
        <li className="menu-items hover:text-tertiary">
          {items.submenu ? (
            <>
              <button type="button" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)} className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                {items.title}{' '}
              </button>
              <Dropdown submenus={items.submenu} dropdown={dropdown} />
            </>
          ) : (
            <a href={items.url}>{items.title}</a>
          )}
        </li>
      );
}