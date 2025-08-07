import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Teacher = () => {
  return (
    <div>
      <h2>Teacher</h2>
      <div className="tab">
        <NavLink end={true} to={""}>
          Teacher
        </NavLink>
        <NavLink to={"addTeacher"}>AddTeacher</NavLink>
        <NavLink to={"removeTeacher"}>RemoveTeacher</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default React.memo(Teacher);
