import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Library = () => {
  return (
    <div>
      <h2>Notification</h2>
      <div className="tab">
        <NavLink end={true} to={""}>
          Notification
        </NavLink>
        <NavLink to={"sendNotification"}>SendNotification</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default React.memo(Library);
