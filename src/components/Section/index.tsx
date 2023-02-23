import './Section.module.css';
import styles from './Section.module.css';
import { Task } from '../Task';
import { Itask } from '../../App';

interface PropsSection {
  tasks: Itask[];
}

export function Section({tasks}: PropsSection) {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p className={styles.created}>Tarefas criadas</p>
          <span>10</span>
        </div>

        <div>
          <p className={styles.completed}>Concluídas</p>
          <span>2 de 10</span>
        </div>
      </header>

      <div className={styles.containerTasks}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </section>
  );
}