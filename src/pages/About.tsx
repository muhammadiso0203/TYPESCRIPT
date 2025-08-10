import { memo, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../lib";
import { editing, remove } from "../lib/features/userControl";
import { useNavigate } from "react-router-dom";

const About = () => {
  const data = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tableMode, setTableMode] = useState(true);

  const handleEdit = (user: any) => {
    dispatch(editing(user));
    navigate("/");
  };

  const handleDelete = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <div className="p-6">
      <div className="w-[200px] h-[60px] bg-white shadow-lg rounded-full m-auto mt-10 flex">
        <div
          className={`w-full h-full flex items-center justify-center cursor-pointer font-semibold rounded-full transition-all
            ${
              tableMode
                ? "text-gray-600 "
                : "bg-white text-gray-700 border border-gray-300 "
            }`}
          onClick={() => setTableMode(true)}
        >
          Table View
        </div>
      </div>

      {tableMode && (
        <div className="overflow-x-auto mt-12 shadow-lg rounded-lg">
          <table className="mx-auto w-full table-auto border-collapse text-lg">
            <thead className=" text-gray-500">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4">Username</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Password</th>
                <th className="px-6 py-4">Age</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data?.map((user, index) => (
                <tr
                  key={user.id}
                  className={`transition-all ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-blue-50`}
                >
                  <td className="py-4">{user.id}</td>
                  <td className="py-4 font-medium">{user.username}</td>
                  <td className="py-4">{user.email}</td>
                  <td className="py-4">{user.password}</td>
                  <td className="py-4">{user.age}</td>
                  <td className="py-4 flex justify-center gap-4">
                    <button
                      className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition"
                      onClick={() => handleEdit(user)}
                    >
                      <FaEdit className="text-green-600 text-xl" />
                    </button>
                    <button
                      className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition"
                      onClick={() => handleDelete(user.id)}
                    >
                      <FaTrash className="text-red-600 text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default memo(About);
