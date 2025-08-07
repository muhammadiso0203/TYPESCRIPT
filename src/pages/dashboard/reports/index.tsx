import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Report = () => {
  return (
    <div>
      <h2>Reports</h2>
      <div className="tab">
        <NavLink end={true} to={""}>
          Report
        </NavLink>
        <NavLink to={"addReport"}>AddReport</NavLink>
        <NavLink to={"removeReport"}>RemoveReport</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default React.memo(Report);
