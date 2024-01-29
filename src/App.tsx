import React, { FC } from "react";
import Navigation from "./components/Navigation/Navigation.tsx";
import { menusMocks } from "./components/Navigation/Navigation.mock.tsx";

const App: FC = () => (
  <div>
    <Navigation menus={menusMocks} />
  </div>
);

export default App;
