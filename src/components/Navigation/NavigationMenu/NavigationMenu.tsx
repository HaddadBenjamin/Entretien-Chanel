import React, { FC } from "react";
import styles from "./NavigationMenu.module.css";
import { INavigationMenu } from "../Navigation.model";
import ArrowRight from "../../../assets/icons/ArrowRight";

const NavigationMenu: FC<INavigationMenu> = ({ title, menus }) => (
  <div className={styles.container}>
    <div className={styles.title}>{title}</div>
    {menus && <ArrowRight className={styles.arrow} />}
  </div>
);

export default NavigationMenu;
