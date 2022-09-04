import './App.css'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Todo() {
  let { todoId } = useParams();
  const [todo, settodo] = useState(null);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then((res) => {
      const response = res.data;
      settodo(response);
    });
  }, []);
  const { userid, title, completed } = todo || {};
  return (
    <div>
      {
        todo ? (<div>
          <h2>{title}</h2>
          <h3>{userid}</h3>
          <h3>completed : {completed}</h3>
        </div>
        ) : (
          <h3>loading...</h3>
        )
      }
    </div>
  )
}