import './Section.module.css';
import styles from './Section.module.css';
import { Task } from '../Task';
import { Itask } from '../../App';

interface PropsSection {
  tasks: Itask[];
  onDeleteTask: (id: string) => void
}

export function Section({tasks, onDeleteTask}: PropsSection) {

  const tasksLength = tasks.length;
  const completedTasks = tasks.filter((task) => {
    return task.isCompleted === true; 
  })
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p className={styles.created}>Tarefas criadas</p>
          <span>{tasksLength}</span>
        </div>

        <div>
          <p className={styles.completed}>Concluídas</p>
          <span>{completedTasks.length} de {tasksLength}</span>
        </div>
      </header>

      <div className={styles.containerTasks}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
    </section>
  );
}