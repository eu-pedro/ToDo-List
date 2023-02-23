import logoToDo from '../../assets/logoToDo.svg';
import styles from './Header.module.css';
import { PlusCircle } from 'phosphor-react';

export function Header () {
  return (
    <header className={styles.header}>
      <img src={logoToDo} alt="" />
      <form className={styles.form}>
        <input type="text" className={styles.input} placeholder="Adicione uma nova tarefa"/>
        <button className={styles.button}>
          Criar
          <PlusCircle size={22}/>
          </button>
      </form>
    </header>
  );
}