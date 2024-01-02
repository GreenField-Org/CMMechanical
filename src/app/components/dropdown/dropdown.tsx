interface SubmenuProps {
    submenus: {
        title: string;
        url: string;
    }[];
    dropdown: boolean;
}

export default function Dropdown({ submenus, dropdown }: SubmenuProps) {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
          {submenus.map((submenu, index) => (
            <li key={index} className="menu-items">
              <a href={submenu.url}>{submenu.title}</a>
            </li>
          ))}
        </ul>
      );
}
