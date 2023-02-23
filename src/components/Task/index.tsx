import { Trash } from 'phosphor-react';
import styles from './Task.module.css';


export function Task() {
  return (
    <section className={styles.taskContainer}>
      <button className={styles.checkContainer}>
        <div />
      </button>


      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nobis, iure ipsa minima maxime atque.</p>


     
      <Trash size={22} cursor="pointer"/>
      
    </section>
  );
}