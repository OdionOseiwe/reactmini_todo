import './App.css'
import Alltodos from "./alltodo";
import Todo from "./todo.jsx";
import { Routes, Route} from 'react-router-dom';

export default function App() {
  
  return (
    <main>  
    <Routes>
      <Route path="/" element={<Alltodos />} />
      <Route path="/:todoId" element={<Todo />} />
    </Routes>
    </main>
  )
}
