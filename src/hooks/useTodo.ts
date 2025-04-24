import { useEffect, useState } from 'react';

export const useTodo =()=>{
    const[tasks,setTask]=useState<string[]>([]);
    const[input,setInput]=useState('');
    useEffect(()=>{
        const saved = localStorage.getItem('todo-tasks');
        if(saved) setTask(JSON.parse(saved))
    },[]);
    useEffect(()=>{
        localStorage.setItem('todo-tasks',JSON.stringify(tasks))

},[tasks]);
const addTask = () => {
    if (input.trim()) {
      setTask(prev => [...prev, input.trim()]);
      setInput('');
    }
  };
    const removeTask =(index:number)=>{
        setTask(prev=>prev.filter((_,i)=>i !==index))
  };
  return {
    tasks,
    input,
    setInput,
    addTask,
    removeTask,
  };
}