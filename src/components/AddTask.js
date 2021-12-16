import {useState} from 'react';



const AddTask = ({ onAdd }) => {

    const [text, setText] =  useState('');
    const [day, setday] =  useState('');
    const [reminder, setreminder] =  useState(false);
    
    const onSubmit=(e)=>{
        e.preventDefault()

        if(!text){
            alert('Please Add a Task')
            return
        }
        else if(!day){
            alert('Please Add a Day')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setday('')
        setreminder(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Task</label>
                <input type="text" placeholder="enter the task" value={text} onChange={(e)=>setText(e.target.value)} />    
            </div>
            <div>
                <label>Date & Time</label>
                <input type="text" placeholder="enter the Date and Time" value={day} onChange={(e)=>setday(e.target.value)} />    
            </div>
            <div>
                <label>Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setreminder(e.currentTarget.checked)} />    
            </div>
            <div>
                <input type="submit" className="addBtn" value="Add Task" />    
            </div>
            
        </form>
    )
}

export default AddTask
