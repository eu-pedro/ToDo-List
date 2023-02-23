import './global.css'

import { Header } from './components/Header'
import { Section } from './components/Section'
import { useState } from 'react'

export interface Itask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {

  const [tasks, setTasks] = useState<Itask[]>([
    {id: '1', title: 'test', isCompleted: true}
  ])

  return (
    <>
      <Header/>
      <Section
        tasks={tasks}
      />
    </>
  )
}

export default App
