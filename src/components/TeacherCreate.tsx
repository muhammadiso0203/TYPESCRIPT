import React, {
  useEffect,
  useState,
  type Dispatch,
  type FC,
  type FormEvent,
  type SetStateAction,
} from "react";
import type { ITeacher } from "../types";

interface Props {
  setData: Dispatch<SetStateAction<ITeacher[]>>;
  editingItem: ITeacher | null;
  setEditingItem: Dispatch<SetStateAction<ITeacher | null>>;
}

const TeacherCreate: FC<Props> = ({ setData, editingItem, setEditingItem }) => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [addres, setAddres] = useState("");
  const [profession, setProfession] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    if (editingItem) {
      setFullName(editingItem.fullName);
      setProfession(editingItem.profession);
      setSalary(editingItem.salary);
    }
  }, [editingItem]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingItem) {
      setData((prev) => {
        return prev.map((teacher) =>
          teacher.id == editingItem.id
            ? { ...teacher, fullName, profession, salary }
            : teacher
        );
      });
      setEditingItem(null);
    } else {
      let newTeacher: ITeacher = {
        id: Date.now(),
        fullName,
        age:Number(age),
        addres,
        profession,
        salary,
      };
      setData((prev) => [...prev, newTeacher]);
    }
    setFullName("");
    setProfession("");
    setSalary("");
  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="container mx-auto flex justify-center mt-10 gap-2.5"
      >
        <input
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          placeholder="Fullname"
          className="border rounded-[8px] p-2"
        />
        <input
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="text"
          placeholder="Age"
          className="border rounded-[8px] p-2"
        />
        <input
          required
          value={addres}
          onChange={(e) => setAddres(e.target.value)}
          type="text"
          placeholder="Addres"
          className="border rounded-[8px] p-2"
        />
        <input
          required
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          type="text"
          placeholder="Profession"
          className="border rounded-[8px] p-2"
        />
        <input
          required
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          type="text"
          placeholder="salary"
          className="border rounded-[8px] p-2"
        />
        <button className="border rounded-[8px] p-2 w-40 bg-blue-500 text-white text-[18px]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default React.memo(TeacherCreate);
