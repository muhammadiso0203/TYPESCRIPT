import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Library = () => {
  return (
    <div>
      <h2>Library</h2>
      <div className="tab">
        <NavLink end={true} to={""}>
          Librarian
        </NavLink>
        <NavLink to={"addBook"}>AddBook</NavLink>
        <NavLink to={"removeBook"}>RemoveBook</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default React.memo(Library);
