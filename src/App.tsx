import { memo } from "react";
import { useRoutes } from "react-router-dom";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <div>
      {useRoutes([
        { path: "/", element: <Shop /> },
      ])}
    </div>
  );
};

export default memo(App);
