import React from 'react'
import './style.css';
import { useHistory } from "react-router-dom";

export default function HomeScreen() {
    let history = useHistory();

  function handleClick() {
    history.push("/AR");
  }


    return (
        <div>
            <button onClick={handleClick}>
            AR
            </button>
        </div>
    )
}
