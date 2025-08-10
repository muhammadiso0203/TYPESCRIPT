import { memo } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[50px] flex justify-center items-center gap-80 mt-[10px]">
      <NavLink
        className={({ isActive }) =>
          `text-[20px] px-9 py-2 ${isActive ? " text-[black]" : ""}`
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `text-[18px] px-8 py-1 ${isActive ? "text-[black]" : ""}`
        }
        to={"/about"}
      >
        About
      </NavLink>
    </div>
  );
};

export default memo(Header);
