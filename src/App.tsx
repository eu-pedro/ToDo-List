import './global.css'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
export interface Itask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {

  const [tasks, setTasks] = useState<Itask[]>([])


  function addTask (title:string) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: title,
        isCompleted: false
      }
    ])
  }

  

  function deleteTask (id: string) { 
    const tasksForDelete = tasks.filter((task) => {
      // se for true => é diferente, logo mantém.
      // se for false => é igual, logo remove.
      return task.id !== id;
    })
    setTasks(tasksForDelete)
  }

  function changeIsCompleted (taskId: string) {
    const alternateIsCompleted = tasks.map((task) => {
      if(task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      else {
        return task;
      }
    })
    setTasks(alternateIsCompleted)
  }

  return (
    <>
      <Header
        onAddTask={addTask}
      />
      <Section
        tasks={tasks}
        onDeleteTask={deleteTask}
        onChangeIsCompleted={changeIsCompleted}
      />
    </>
  )
}

export default App

