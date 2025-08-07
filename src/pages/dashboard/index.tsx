import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <h2 className="text-2xl font-bold text-center">Education dashboard</h2>
        <ul className="dashboard__collection">
          <li>
            <NavLink end={true} className="dashboard__link" to={""}>
              Statictics
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard__link" to={"courses"}>
              Cources
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard__link" to={"exam"}>
              Exam
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard__link" to={"feedback"}>
              Feedback
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard__link" to={"library"}>
              Library
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard__link" to={"notification"}>
              Notification
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard__link" to={"payment"}>
              Payment
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard__link" to={"profile"}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard__link" to={"reports"}>
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard__link" to={"teacher"}>
              Teacher
            </NavLink>
          </li>
          <li>
            <NavLink className="dashboard__link" to={"students"}>
              Students
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-header"></div>
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Dashboard);
