import { Trash, CheckCircle } from 'phosphor-react';
import { Itask } from '../../App';
import styles from './Task.module.css';


interface PropsTask {
  task: Itask;
  onDeleteTask: (id: string) => void
  onChangeIsCompleted: (id: string) => void
}

export function Task({ task, onDeleteTask, onChangeIsCompleted }: PropsTask) {

  const isCompleted = task.isCompleted;

  function handleDeleteTask() {
    onDeleteTask(task.id);
    console.log(task.id)
  }

  function changeIsCompleted () {
    onChangeIsCompleted(task.id);
  }

  return (
    <section className={styles.taskContainer}>
      <button className={styles.checkContainer} onClick={changeIsCompleted}>
        {isCompleted ? (<CheckCircle size={33} className={styles.checkBox}/>) : (<div/>)}
      </button>


      {isCompleted ? (<p style={{textDecoration: 'line-through'}}>{task.title}</p>) : (<p>{task.title}</p>)}



      <Trash onClick={handleDeleteTask} className={styles.iconeTrash} size={22} cursor="pointer" />

    </section>
  );
}