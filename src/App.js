import Header from './components/Header'
import Task from './components/Task'
import './App.css'
import { useState, useEffect } from "react";
import AddTask from './components/AddTask'
import Footer from './components/footer';
import About from './components/about';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'; 

function App() {

  const [showAdd,setshowAdd] = useState(false)

  const [task,setTask] = useState([])

const deleteTask = async (id) =>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'DELETE',
  })

  setTask(task.filter((task) => task.id !== id))
}

useEffect(()=>{ 
  const getTasks = async () =>{
    const taskFromServe = await fetchTasks()
    setTask(taskFromServe)
  }
  getTasks()
}, [])

const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()

  return data
}

const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()

  return data
}

const addTask = async (ta) =>{

  const res = await fetch('http://localhost:5000/tasks',{
    method:'POST',
    headers:{
      'Content-type': 'application/json',
    },
    body: JSON.stringify(ta),
  })

  const data = await res.json()

  setTask([...task,data])

  /*const id= Math.floor(Math.random()* 10000)+1
  const newTask = { id, ...ta}
  setTask([...task,newTask])*/
}

const toggleRemainder = async (id) =>{
  const taskTOToggle = await fetchTask(id)
  const upTask = {...taskTOToggle,reminder: !taskTOToggle.reminder}

  const res= await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'PUT',
    headers:{
      'Content-type': 'application/json',
    },
    body: JSON.stringify(upTask),
  })

  const data = await res.json()

  setTask(
   task.map((t) => t.id === id ? { ...t, reminder: data.reminder} : t))
}

  return (
    <Router>
      <div class="front-data">
        <Header title="Task Manger" onAdd={()=>setshowAdd(!showAdd) } showAddTask={showAdd} />
        {showAdd && <AddTask onAdd={addTask} />}
        { task.length > 0 ? <Task task={task} onDelete={deleteTask} onToggle={toggleRemainder} /> : <h3>No task found</h3>}
        <Routes>
          <Route path='/' render={(props)=>
            <div>
                {showAdd && <AddTask onAdd={addTask} />}
                { task.length > 0 ? <Task task={task} onDelete={deleteTask} onToggle={toggleRemainder} /> : <h3>No task found</h3>}
            </div>  
          }/>
          <Route path='/about' element={<About />}/>
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
