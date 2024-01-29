export interface INavigationMenu {
  title: string;
  menus?: INavigationMenu[];
  parent?: INavigationMenu;
}
