import { ChangeEvent, FormEvent, useState } from 'react';
import logoToDo from '../../assets/logoToDo.svg';
import styles from './Header.module.css';
import { PlusCircle } from 'phosphor-react';

interface HeaderProps {
  onAddTask: (title: string, verifyCompleted: boolean) => void
}

export function Header({ onAddTask }: HeaderProps) {

  const [newTask, setNewTask] = useState('');

  function handleChangeTask (e:ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  function handleNewTask (e:FormEvent) {
    e.preventDefault();
    if(newTask === '') return;
    onAddTask(newTask, false);
    setNewTask('')
  }

  return (
    <header className={styles.header}>
      <img src={logoToDo} alt="imagem logo todo" />
      <form onSubmit={handleNewTask} className={styles.form}>
        <input onChange={handleChangeTask} value={newTask} type="text" className={styles.input} placeholder="Adicione uma nova tarefa" />
        <button className={styles.button}>
          Criar
          <PlusCircle size={22} />
        </button>
      </form>
    </header>
  );
}