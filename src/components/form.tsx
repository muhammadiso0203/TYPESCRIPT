import React, { useState, useEffect } from "react";
import type { Student } from "./main";

interface Props {
  submit: (student: Omit<Student, "id">) => void;
  update: (student: Student) => void;
  editStudent: Student | null;
}

const FormControl: React.FC<Props> = ({ submit, update, editStudent }) => {
  const [form, setForm] = useState<Omit<Student, "id">>({
    name: "",
    age: 0,
  });

  useEffect(() => {
    if (editStudent) {
      setForm({ name: editStudent.name, age: editStudent.age });
    }
  }, [editStudent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.age) return;

    if (editStudent) {
      update({ ...editStudent, ...form });
    } else {
      submit(form);
    }

    setForm({ name: "", age: 0});
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto flex justify-center mt-10 gap-60">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border rounded-[8px] p-2"
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className="border rounded-[8px] p-2"
        />
        <button
          className="border rounded-[8px] p-2 w-40 bg-blue-500 text-white text-[18px]"
          type="submit"
        >
          {editStudent ? "Update" : "Submit"}
        </button>
    </form>
  );
};

export default FormControl;
