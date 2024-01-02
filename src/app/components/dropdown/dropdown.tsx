interface SubmenuProps {
    submenus: {
        title: string;
        url: string;
    }[];
    dropdown: boolean;
}

export default function Dropdown({ submenus, dropdown }: SubmenuProps) {
    return (
        <div className={`dropdown ${dropdown ? "block" : "hidden"} absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
        <ul className={`py-2 text-sm text-gray-700 dark:text-gray-400`}>
          {submenus.map((submenu, index) => (
            <li key={index} className="menu-items">
              <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href={submenu.url}>{submenu.title}</a>
            </li>
          ))}
        </ul>
        </div>
      );
}
