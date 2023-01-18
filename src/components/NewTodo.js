import './style.css';
import { useState } from 'react';
import axios from 'axios'

import React from 'react'

export default function NewTodo() {
    const [text,getTitle]=useState("");
const updateTitle = (event)=>getTitle(event.target.value)
    
function addTodo(e){
    
    
    axios({
        method: 'post',
        url: "http://localhost:5000/api/todolist",
        data:{
            text:text
        }
    });
   
   
    window.location.reload(true);
}
  return (
    <div className='iClass'>
        <input typeof='text'  className='ic1' value={text} onChange={updateTitle} placeholder='Enter todo....'/><button className='ic2' onClick={()=>addTodo()}>Add to list</button>
    </div>
  )
}

