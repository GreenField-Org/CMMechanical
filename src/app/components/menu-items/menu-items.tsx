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
              <button type="button" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
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