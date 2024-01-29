import { INavigationMenu } from "./Navigation.model";

const menuMock: INavigationMenu = { title: "fake data" };

export const menusMocks: INavigationMenu[] = [
  {
    title: "designPlox",
  },
  {
    title: "artists",
    menus: [menuMock],
  },
  {
    title: "albums",
    menus: [
      {
        title: "get your wings",
        menus: [menuMock],
      },
      {
        title: "hotel california",
        menus: [menuMock],
      },
      {
        title: "physical graffiti",
        menus: [
          {
            title: "houses of the holy",
          },
          {
            title: "in my time of dying",
          },
        ],
      },
    ],
  },
  {
    title: "songs",
    menus: [menuMock],
  },
  {
    title: "genres",
    menus: [menuMock],
  },
  {
    title: "settings",
    menus: [menuMock],
  },
];
