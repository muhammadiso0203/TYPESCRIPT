import { memo } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[50px] flex justify-center items-center gap-5 mt-[10px]">
      <NavLink
        className={({ isActive }) =>
          `text-[18px] px-8 py-1 ${
            isActive ? "bg-[dodgerblue] text-[white]" : ""
          }`
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `text-[18px] px-8 py-1 ${
            isActive ? "bg-[dodgerblue] text-[white]" : ""
          }`
        }
        to={"/about"}
      >
        About
      </NavLink>
    </div>
  );
};

export default memo(Header);
