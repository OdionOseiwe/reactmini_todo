import React from "react";
import './App.css';
import { Link} from "react-router-dom";

const  Todocard = (props) =>{
  const {todo}  = props;
  const {title, completed , id} = todo;
    return(
          <div className = "card">
            <Link  className='link'    to={`/${id}`}>
                <h3>{title}</h3>
                <h4>it is completed : {completed}</h4>
            </Link>
          </div>
   )
}

export default Todocard;
