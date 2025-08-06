import React, { useCallback, useEffect, useState } from 'react'
import TeacherCreate from './TeacherCreate'
import TeacherView from './TeacherView'
import type { ITeacher } from '../types'

const Teacher = () => {
    const [data, setData] = useState<ITeacher[]>(JSON.parse(localStorage.getItem("data") || '[]') || [])
    const [editingItem, setEditingItem] = useState<null | ITeacher>(null)

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data))
    }, [data])

    const handleDelete = useCallback((id: number) => {
        setData(prev => prev.filter((item) => item.id !== id))
    }, [setData])
    
  return (
    <div>
        <TeacherCreate setData={setData} editingItem={editingItem} setEditingItem={setEditingItem}/>
        <TeacherView onDelete={handleDelete} setEditingItem={setEditingItem} data={data}/>
    </div>
  )
}

export default React.memo(Teacher)