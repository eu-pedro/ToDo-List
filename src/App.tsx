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


  function addTask (title:string, verifyCompleted:boolean) {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: title,
        isCompleted: verifyCompleted
      }
    ])
  }

  return (
    <>
      <Header
        onAddTask={addTask}
      />
      <Section
        tasks={tasks}
      />
    </>
  )
}

export default App

