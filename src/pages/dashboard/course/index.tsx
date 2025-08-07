import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Course = () => {
  return (
    <div>
      <h2>Cources</h2>
      <div className="tab">
        <NavLink end={true} to={""}>
          Courses
        </NavLink>
        <NavLink to={"addCourses"}>Add Cources</NavLink>
        <NavLink to={"courseMaterials"}>Course Materials </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default React.memo(Course);
