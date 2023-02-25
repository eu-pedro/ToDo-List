import { useState } from 'react';
import { Trash, CheckCircle } from 'phosphor-react';
import { Itask } from '../../App';
import styles from './Task.module.css';
import Modal from 'react-modal'
import { X } from 'phosphor-react'


interface PropsTask {
  task: Itask;
  onDeleteTask: (id: string) => void
  onChangeIsCompleted: (id: string) => void
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1a1a1a',
    borderRadius: '8px',
  }
}

export function Task({ task, onDeleteTask, onChangeIsCompleted }: PropsTask) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const isCompleted = task.isCompleted;

  function handleDeleteTask() {
    setModalIsOpen(true);
   
  }

  function handleCloseModal() {
    setModalIsOpen(false);
    onDeleteTask(task.id);
  }

  function changeIsCompleted() {
    onChangeIsCompleted(task.id);
  }

  return (
    <section className={styles.taskContainer}>
      <button className={styles.checkContainer} onClick={changeIsCompleted}>
        {isCompleted ? (<CheckCircle size={33} className={styles.checkBox} />) : (<div />)}
      </button>
      {isCompleted ? (<p style={{ textDecoration: 'line-through' }}>{task.title}</p>) : (<p>{task.title}</p>)}

      <Trash onClick={handleDeleteTask} className={styles.iconeTrash} size={22} cursor="pointer" />
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
      >
        <header>
          <h2 className={styles.alert}>Aviso</h2>
          <X 
            size={32}
            cursor='pointer'
            onClick={()=> setModalIsOpen(false)}
          />
        </header>
        <p className={styles.paragraph}>Clique em Confirmar para excluir a tarefa</p>
        <div className={styles.containerButton}>
          <button onClick={handleCloseModal}>Confirmar</button>
        </div>
      </Modal>
    </section>
  );
}