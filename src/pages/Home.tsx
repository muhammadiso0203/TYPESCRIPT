import React, { useEffect, useState } from "react";
import type { IUser } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { create, update, editing } from "../lib/features/userControl";
import type { RootState } from "../lib";
import { useNavigate } from "react-router-dom";

const initialState: IUser = {
  id: "",
  username: "",
  email: "",
  password: "",
  age: "",
};

const Home = () => {
  const data = useSelector((state: RootState) => state.user.value);
  const getEditing = useSelector((state: RootState) => state.user.editing);

  const [formData, setFormData] = useState<IUser>(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: IUser) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (getEditing) {
      dispatch(update(formData));
      setFormData(initialState);
      dispatch(editing(null));
    } else {
      const lastId = data.length > 0 ? data[data.length - 1]?.id ?? 0 : 0;
      const newUser = { ...formData, id: Number(lastId) + 1 };
      dispatch(create(newUser));
      setFormData(initialState);
    }

    navigate("/about");
  };

  useEffect(() => {
    if (getEditing) {
      setFormData(getEditing as IUser);
    }
  }, [getEditing]);

  return (
    <div className="h-[90vh] flex justify-center bg-gradient-to-br bg-gray-200 py-30">
      <div>
        <h1 className="font-bold text-2xl text-center">
          {getEditing ? "Update User" : "Create User"}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-[15px] pt-[30px]"
        >
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            type="text"
            className="w-[500px] h-[47px] px-[15px] outline-none rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            placeholder="Enter username..."
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="w-[500px] h-[47px] px-[15px] outline-none rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            placeholder="Enter email..."
          />
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            className="w-[500px] h-[47px] px-[15px] outline-none rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            placeholder="Enter password..."
          />
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            type="number"
            className="w-[500px] h-[47px] px-[15px] outline-none rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            placeholder="Enter Age..."
          />
          <button className="border w-[500px] h-[40px] mt-[5px] text-[white] bg-[#4070F4] cursor-pointer hover:opacity-85 rounded-[10px]">
            {getEditing ? "Save" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Home);
