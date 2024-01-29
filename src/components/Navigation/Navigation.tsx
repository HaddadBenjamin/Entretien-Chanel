import React, { FC, useState } from "react";
import { INavigationMenu } from "./Navigation.model";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import styles from "./Navigation.module.css";
import ArrowRight from "../../assets/icons/ArrowRight";

interface Props {
  menus: INavigationMenu[];
}

const Navigation: FC<Props> = ({ menus }) => {
  const [horizontalMenus, setHorizontalMenus] = useState([menus]);

  const addHorizontalMenu = (newMenu: INavigationMenu[]): void =>
    setHorizontalMenus((previousMenus) => [...previousMenus, newMenu]);

  const removeLastHorizontalMenu = (): void =>
    setHorizontalMenus((previousMenus) => previousMenus.slice(0, -1));

  return (
    <div
      className={styles.container}
      style={{ left: `${-(horizontalMenus.length - 1) * 100}%` }}
    >
      {horizontalMenus.map((horizontalMenu, horizontalMenuIndex) => (
        <div className={styles.menuContainer}>
          <>
            {horizontalMenuIndex > 0 && (
              <div className={styles.arrowContainer}>
                <ArrowRight
                  className={styles.arrow}
                  onClick={removeLastHorizontalMenu}
                />
              </div>
            )}
            {horizontalMenu.map((menu, menuIndex) => (
              <NavigationMenu
                key={horizontalMenuIndex + menu.title}
                {...menu}
                addHorizontalMenu={addHorizontalMenu}
              />
            ))}
          </>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
