import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Exam = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Exam</h2>
      <div className="tab">
        <NavLink end={true} to={""}>
          Exams
        </NavLink>
        <NavLink to={"addExam"}>AddExam</NavLink>
        <NavLink to={"endExam"}>EndExam</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default React.memo(Exam);
