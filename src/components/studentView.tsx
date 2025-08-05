import React from "react";
import type { Student } from "./main";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Props {
  students: Student[];
  onDelete: (id: number) => void;
  onEdit: (student: Student) => void;
}

const StudentView: React.FC<Props> = ({ students, onDelete, onEdit }) => {
  return (
    <table className=" container mx-auto table-auto border w-[1100px] mt-10">
      <thead className="text-center bg-gray-100">
        <tr>
          <th className="border px-4 py-2">#</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Age</th>
          <th className="border px-4 py-2" colSpan={2}>
            Action
          </th>
        </tr>
      </thead>

      <tbody className="text-center">
        {students.map((student, index) => (
          <tr key={student.id}>
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2">{student.name}</td>
            <td className="border px-4 py-2">{student.age}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onEdit(student)}
                className="px-3 py-1"
              >
                <FaEdit/>
              </button>
            </td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onDelete(student.id)}
                className=" px-3 py-1"
              >
                <FaTrash/>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentView;
