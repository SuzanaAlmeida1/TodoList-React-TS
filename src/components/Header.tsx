import styles from './Header.module.css';
import fogueteLogo from '../assets/foguete-logo.svg';
import todo from '../assets/todo.svg';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onAddTask: (taskTitle: string) => void;
}



export function Header( {onAddTask}: Props){

const[title, setTitle] = useState('');

function handleSubmit(event: FormEvent){
event.preventDefault();

onAddTask(title);
setTitle('');
}

function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
  setTitle(event.target.value);
}

  return(
    <header className={styles.header}>
      <img src={fogueteLogo} alt="logofoguete" />
      <img src={todo} alt="logotodo" />


      <form  className={styles.campoForm} onSubmit={handleSubmit}>
         <input 
         placeholder="escreva a tarefa" 
         onChange={onChangeTitle} 
         value={title}
         />
        
         <button 
         className={styles.forme}  
         type="submit"
         > Criar <PlusCircle size={20} /> 
         </button>
       
                    
      </form>


          
    </header>

    
  );
}