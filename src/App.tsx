import React, { FC } from "react";
import Navigation from "./components/Navigation/Navigation";
import { menusMocks } from "./components/Navigation/Navigation.mock";

const App: FC = () => (
  <div>
    <Navigation menus={menusMocks} />
  </div>
);

export default App;
