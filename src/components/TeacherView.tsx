import React, { type Dispatch, type FC, type SetStateAction } from "react";
import type { ITeacher } from "../types";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Props {
  data: ITeacher[];
  onDelete: (id: number) => void;
  setEditingItem: Dispatch<SetStateAction<ITeacher | null>>;
}

const TeacherView: FC<Props> = ({ data, onDelete, setEditingItem }) => {

  return (
    <table className=" container mx-auto table-auto border w-[1100px] mt-10">
      <thead className="text-center bg-gray-100">
        <tr>
          <th className="border px-4 py-2">#</th>
          <th className="border px-4 py-2">Fullname</th>
          <th className="border px-4 py-2">Profession</th>
          <th className="border px-4 py-2">Salary</th>
          <th className="border px-4 py-2" colSpan={2}>
            Action
          </th>
        </tr>
      </thead>

      <tbody className="text-center">
        {data.map((teacher:ITeacher, index) => (
          <tr key={teacher.id}>
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2">{teacher.fullName}</td>
            <td className="border px-4 py-2">{teacher.profession}</td>
            <td className="border px-4 py-2">{teacher.salary}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => setEditingItem(teacher)}
                className="px-3 py-1"
              >
                <FaEdit/>
              </button>
            </td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onDelete(teacher.id)}
                className=" px-3 py-1"
              >
                <FaTrash/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    // <div>
    //   {data?.map((teacher: ITeacher) => (
    //     <div key={teacher.id}>
    //       <h1>{teacher.fullName}</h1>
    //       <h3>{teacher.profession}</h3>
    //       <h3>{teacher.salary}</h3>
    //       <button onClick={() => onDelete(teacher.id)}>Delete</button>
    //       <button onClick={() => setEditingItem(teacher)}>Update</button>
    //     </div>
    //   ))}
    // </div>
  );
};

export default React.memo(TeacherView);
