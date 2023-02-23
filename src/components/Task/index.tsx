import { Trash } from 'phosphor-react';
import { Itask } from '../../App';
import styles from './Task.module.css';

interface PropsTask {
  task: Itask;
}


export function Task({task}: PropsTask) {
  return (
    <section className={styles.taskContainer}>
      <button className={styles.checkContainer}>
        <div />
      </button>


      <p>{task.title}</p>



      <Trash size={22} cursor="pointer"/>
      
    </section>
  );
}