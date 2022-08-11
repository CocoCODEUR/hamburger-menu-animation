import Link from "next/link";
import Hamburger from "./hamburger";
import { useState } from "react";

type Menu = {
  initial: boolean;
  clicked: boolean;
  menuName: string;
};
export default function Header() {
  const [menu, SetMenu] = useState<Menu>({
    initial: false,
    clicked: false,
    menuName: "Menu",
  });
  const [disabled, SetDisabled] = useState(false);
  const handleMenu = () => {
    disbableMenu();
    if (menu.initial === false) {
      SetMenu({
        initial: true,
        clicked: true,
        menuName: "Close",
      });
    } else if (menu.clicked === true) {
      SetMenu({
        initial: true,
        clicked: false,
        menuName: "Menu",
      });
    } else if (menu.clicked === false) {
      SetMenu({
        initial: true,
        clicked: true,
        menuName: "Close",
      });
    }
  };
  // empeche de fermer ouvrir fermer ouvrir ... pour les petits malins
  const disbableMenu = () => {
    SetDisabled(!disabled);
    setTimeout(() => {
      SetDisabled(false);
    }, 1200);
  };
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link href="/">Hamburger Menu </Link>
              <div className="menu">
                <button disabled={disabled} onClick={handleMenu}>
                  Menu
                </button>
              </div>
            </div>
          </div>
        </div>
        <Hamburger menu={menu}></Hamburger>
      </div>
    </header>
  );
}
