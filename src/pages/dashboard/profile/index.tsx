import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <div className="tab">
        <NavLink end={true} to={""}>
          Profiles
        </NavLink>
        <NavLink to={"name"}>Name</NavLink>
        <NavLink to={"email"}>Email</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default React.memo(Profile);
