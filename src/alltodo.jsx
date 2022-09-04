import './App.css'
import React ,{ useEffect, useState } from 'react'
import axios from 'axios';
import Todocard from './Todocard.jsx';

export default function Alltodos() {
  const [todos, settodos] = useState();
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
      const responses = res.data;
      settodos(responses);
    });
  }, []);
  return (
    <>{ todos ? (
      <div className = "cards">
        {
           todos.slice(0, 10).map((todo)=>(<Todocard todo = {todo}/>))
        }
      </div>
    ): (
      <h1>loading...</h1>
    )
      }
    </>
  )
}