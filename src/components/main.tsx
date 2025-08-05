import React, { useState } from 'react';
import FormControl from './form';
import StudentView from './studentView';

export interface Student {
  id: number;
  name: string;
  age: number;
}

const Main: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [editStudent, setEditStudent] = useState<Student | null>(null);

  const addStudent = (student: Omit<Student, 'id'>) => {
    setStudents(prev => [...prev, { id: Date.now(), ...student }]);
  };

  const updateStudent = (updated: Student) => {
    setStudents(prev =>
      prev.map(e => (e.id === updated.id ? updated : e))
    );
    setEditStudent(null);
  };

  const deleteStudent = (id: number) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  const handleEdit = (student: Student) => {
    setEditStudent(student);
  };

  return (
    <div className='container mx-auto'>
      <h2 className='text-center text-2xl'>Student Manager</h2>
      <FormControl
        submit={addStudent}
        update={updateStudent}
        editStudent={editStudent}
      />
      <StudentView
        students={students}
        onDelete={deleteStudent}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Main;
