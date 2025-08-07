import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Students = () => {
  return (
    <div>
      <h2>Student</h2>
      <div className="tab">
        <NavLink end={true} to={""}>
          Student
        </NavLink>
        <NavLink to={"addStudent"}>AddStudent</NavLink>
        <NavLink to={"removeStudent"}>RemoveStudent</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default React.memo(Students);
