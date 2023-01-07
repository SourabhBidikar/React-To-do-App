import { useState } from 'react';
import React from 'react';
import './App.css';


function App() {

  const [taskList,setTaskList]=useState([]);
  const [newTask,setTask]=useState("");

  const handleChange=(event)=>{
    
    setTask(event.target.value);

  };

  const addTaskToList=()=>{
      // setTaskList(taskList.push(newTask))  This doesn't work with States
      // const newToDoList=[...taskList,newTask];    //note here used spread operator
      // setTaskList([...taskList,newTask]);   //Directly used above line without assigning value
      // Above code we used for array but now we need array of objects

    //this is single object added one by one
      const task={
        id: taskList.length===0?1:taskList[taskList.length-1].id+1,
        taskName: newTask,
      };
      
      setTaskList([...taskList,task]);
  }
 
  const handleDelete=(id)=>{
  //   const newToDoList=taskList.filter((task)=>{
  //     if(task===taskName){
  //        return false;
  //       }
  //     else {
  //       return true;
  // }});

    // setTaskList(newToDoList);

    setTaskList(taskList.filter((task)=>task.id!==id));

  }

  return (
    <div className="App">
      <div className='header'>
        <h2>React based To-Do List App</h2>
      </div>
      <div className="addTask">
        <input type="text" onChange={handleChange}/>
        <button onClick={addTaskToList}>Add task To do</button>
      </div>
      <div className="list">

          <h2>TASKS TO DO TODAY</h2>
          {taskList.map((task)=>{
            return (
             <div className="first"> 
             <h3>{task.taskName}
             <button className="delbtn" onClick={()=>handleDelete(task.id)}>del</button></h3>
              
            </div>
            )
          })}
      </div>
    </div>
  );
}

export default App;
