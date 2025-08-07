import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Feedback = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Feedback</h2>
      <div className="tab">
        <NavLink end={true} to={""}>
          Feedback
        </NavLink>
        <NavLink to={"addFeedback"}>AddFeedback</NavLink>
        <NavLink to={"removeFeedback"}>RemoveFeedback</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default React.memo(Feedback);
