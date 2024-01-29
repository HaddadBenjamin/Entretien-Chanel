import React, { FC } from "react";
import styles from "./NavigationMenu.module.css";
import { INavigationMenu } from "../Navigation.model";
import ArrowRight from "../../../assets/icons/ArrowRight";

interface Props extends INavigationMenu {
  addHorizontalMenu: (newMenu: INavigationMenu[]) => void;
}

const NavigationMenu: FC<Props> = ({
  title,
  menus,
  addHorizontalMenu,
}) => (
  <div
    className={styles.container}
    onClick={() => {
      if (menus) addHorizontalMenu(menus);
    }}
  >
    <div className={styles.title}>{title}</div>
    {menus && <ArrowRight className={styles.arrow} />}
  </div>
);

export default NavigationMenu;
