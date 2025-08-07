import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Library = () => {
  return (
    <div>
      <h2>Payment</h2>
      <div className="tab">
        <NavLink end={true} to={""}>
          Payments
        </NavLink>
        <NavLink to={"addPayment"}>AddPayment</NavLink>
        <NavLink to={"paymentHistory"}>paymentHistory</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default React.memo(Library);
