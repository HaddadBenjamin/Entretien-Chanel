import React, { FC } from "react";
import { INavigationMenu } from "./Navigation.model";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import styles from "./Navigation.module.css";

interface Props {
  menus: INavigationMenu[];
  id: string;
}

const Navigation: FC<Props> = ({ menus, id }) => (
  <div className={styles.container}>
    {menus.map((menu) => (
      <NavigationMenu key={`${id}-${menu.title}`} {...menu} />
    ))}
  </div>
);

export default Navigation;
