import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Statistic = () => {
  return (
    <div>
      <h2>Statistic</h2>
      <div className="tab">
        <NavLink end={true} to={""}>
          Statistic
        </NavLink>
        <NavLink to={"viewStatistic"}>View Statistic</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default React.memo(Statistic);
