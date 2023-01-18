import './style.css';
import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'


export default function TodoList() {
    const [todo,getTodo]=useState([]);
    // let getdata = async () => {
    //       let raw = await axios.get("http://localhost:500/list")  
    //     getTodo(raw.data)
    //     }
    function deleteTodo(id){
      console.log(id)
        axios.delete(`http://localhost:5000/api/todolist/${id}`)  
        .then(res => {  
          console.log(res);  
          console.log(res.data);  
        })  
        // const todo1= todo.filter(item=>item.id !== id)
        // // const todo1 = todo.filter(item => item.id !== id);  
        // getTodo({ todo1 });  
        window.location.reload(true);
    }
        useEffect(() => {
            axios.get("http://localhost:5000/api/todolist")
            .then((res)=>{getTodo(res.data)}).catch(err=>console.log(err));
           
            }, [])
  return (
    <div className='todoList'>
         {(todo.map((todo)=>{return(
                <div className='tclass'>
                <p className='tc'>{todo.text}</p>
                <button className='bclass' onClick={()=>deleteTodo(todo._id)}>delete</button>
            </div>
            )}))}
    </div>
  )
}
