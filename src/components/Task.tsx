import {Trash, Check } from 'phosphor-react';
import { ITask } from '../App';
import styles from './Task.module.css';


interface Props{
  task: ITask;
  onDelete:(taskId:string) => void;
  onComplete: (taskId:string) => void;

}

export function Task({task, onDelete, onComplete}: Props){
  return(
    <div className={styles.insert}>
        <button 
        title='ok' 
        className={styles.ok}
        onClick={() => onComplete(task.id)}> 
        {task.isCompleted ? <Check/> : <div />}
        </button>
        
        <p className={task.isCompleted ? styles.textCompleted : '' }> {task.title}
        </p>        
        
        <button 
        title='deletar tarefa' 
        className={styles.del} 
        onClick={() => onDelete(task.id)}> 
        <Trash size={20} />
        </button>
    </div>

  );
}