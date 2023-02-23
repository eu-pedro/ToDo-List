import { Trash } from 'phosphor-react';
import { Itask } from '../../App';
import styles from './Task.module.css';

interface PropsTask {
  task: Itask;
  onDeleteTask: (id: string) => void
}

export function Task({ task, onDeleteTask }: PropsTask) {

  function handleDeleteTask() {
    onDeleteTask(task.id);
    console.log(task.id)
  }

  return (
    <section className={styles.taskContainer}>
      <button className={styles.checkContainer}>
        <div />
      </button>


      <p>{task.title}</p>



      <Trash onClick={handleDeleteTask} size={22} cursor="pointer" />

    </section>
  );
}