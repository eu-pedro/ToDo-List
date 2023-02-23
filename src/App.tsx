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

  const [tasks, setTasks] = useState<Itask[]>([
    {id: uuidv4(), title: 'test', isCompleted: true},
    {id: uuidv4(), title: 'segunda', isCompleted: false},
    {id: uuidv4(), title: 'segunda', isCompleted: false}
  ])


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

  return (
    <>
      <Header
        onAddTask={addTask}
      />
      <Section
        tasks={tasks}
        onDeleteTask={deleteTask}
      />
    </>
  )
}

export default App

