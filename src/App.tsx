import { memo } from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      {
        useRoutes([
          {path: "/", element: <Home/>}
        ])
      }
    </div>
  );
};

export default memo(App);