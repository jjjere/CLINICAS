import React, {Fragment, useState} from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import estilos from '../infoAdmins/info.module.css'
import Button from '@mui/material/Button';


const FormElement = React.FormEvent<HTMLFormElement>;
interface ITask{
    name: string;
    ap: string;
    em: string;
    done: boolean;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function App(): JSX.Element{
    const [newTask, setNewTask] = useState<string>(''); 
    const [tasks, setTasks] = useState([])
    const [newTaskap, setNewTaskap] = useState<string>(''); 
    const [tasksap, setTasksap] = useState([])
    const [newTaskem, setNewTaskem] = useState<string>(''); 
    const [tasksem, setTasksem] = useState([])
    
    const handleSubmit = (e: FormElement) => {
        e.preventDefault();
        addTask(newTask);
        setNewTask('');
        addTaskap(newTaskap);
        setNewTaskap('');
        addTaskem(newTaskem);
        setNewTaskem('');
        
    }
    
    const addTask = (name: string) =>{
        const newTasks: ITask[] = [...tasks, {name}]
        setTasks(newTasks)
    }
    const addTaskap = ( ap: string) =>{
        const newTasksap: ITask[] = [...tasksap, {ap}]
        setTasksap(newTasksap)
    }
    const addTaskem = ( em: string) =>{
        const newTasksem: ITask[] = [...tasksem, {em}]
        setTasksem(newTasksem)
    }
    
return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <Typography className={estilos.tituloAdmin} id="modal-modal-title" variant="h6" component="h2">
            Informacion de administradores
          </Typography>
            <TextField onChange={e => setNewTask(e.target.value)} value={newTask}className={estilos.admin} type='text' label='Nombre' name='name' variant="outlined" />
            <TextField onChange={e => setNewTaskap(e.target.value)} value={newTaskap}className={estilos.admin} type='text' name='ap' label="Apellido"variant="outlined" />
            <TextField onChange={e => setNewTaskem(e.target.value)} value={newTaskem}className={estilos.admin} type='email' name='em' label="Email" variant="outlined" />
                         
                      <div className={estilos.boton2}> 
                        <button>
            Enviar</button>
           </div>
            </form>
            {
                tasks.map((t: ITask, i: number) => {
                    return <h1 key={i}>{t.name}</h1>
                })
            }
            {
                tasksap.map((t: ITask, i: number) => {
                    return <h1 key={i}>{t.ap}</h1>
                })
            }
                       {
                tasksem.map((t: ITask, i: number) => {
                    return <h1 key={i}>{t.em}</h1>
                })
            }
        </Fragment>
    );
}

export default App;