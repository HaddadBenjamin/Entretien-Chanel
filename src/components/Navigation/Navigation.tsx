import React, { FC } from "react";
import { INavigationMenu } from "./Navigation.model";
import NavigationMenu from "./NavigationMenu/NavigationMenu.tsx";
import styles from "./Navigation.module.css";

interface Props {
  menus: INavigationMenu[];
}

const Navigation: FC<Props> = ({ menus }) => (
  <div className={styles.container}>
    {menus.map((menu) => (
      /* La clé devrait être un id mais pour les besoins du test je n'ai pas généré d'id */
      <NavigationMenu key={menu.title} {...menu} />
    ))}
  </div>
);

export default Navigation;

// background: #F7F5F7
// arrow: #CCE9F8
// backgroundHover: #B0AEB0
// arrowHover: #576169
