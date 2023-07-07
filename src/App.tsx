import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useEffect, useState } from "react";

import styles from './App.module.css';


const LOCAL_STORAGE_KEY = 'todo:savedTasks';


export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);


  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);



  function setTasksAndSave(newTasks: ITask[]){

    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))

  }



  function addTask(taskTitle: string){
    setTasksAndSave([
      ...tasks,

      {

      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
      }
    ])
  }
   
  function deleteTaskById(taskId: string){
    const newTasks = tasks.filter(task => task.id != taskId);
    setTasksAndSave(newTasks);

  }
  function toggleTaskCompletById(taskId: string){
    const newTasks = tasks.map((task) => {
      if(task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };

      }
      return task;
    });
    setTasksAndSave(newTasks);
  }


  return (
    
      <>
        <Header onAddTask={addTask} />
        <div className={styles.wrapper}>
        <Tasks 
        tasks={tasks} 
        onDelete={deleteTaskById} 
        onComplete={toggleTaskCompletById}/>
        </div>
        
      </>
      
    
  )
}

export default App
