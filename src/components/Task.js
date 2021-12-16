import '../App.css'
import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {    
    return (
        <>
          {task.map((t)=>(
          <p class={`block ${t.reminder ? 'rem' : ''}`} onDoubleClick={()=>onToggle(t.id)} key={t.id}> <FaTimes style={{color: 'red',paddingLeft:'380px', paddingTop:'10px',fontSize:'20px',cursor:'pointer'}} onClick={() => onDelete(t.id)} /><h3>{t.text}</h3>{t.day}  </p>))}
        </>
    )
}

export default Task
