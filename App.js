import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {doIncrement, doDecrement} from './redux'

import { Provider } from 'react-redux';
import {showTodos} from './redux'


const App =()=>{
  const state=useSelector((state)=>state)
  
  const usedispatch=useDispatch();
  useEffect(()=>{
    usedispatch(showTodos());
  },[])
  const {todo} = state;
  console.log(todo,"app.js")
  
    return (
        <div>
            <table class="table">
  <thead>
  <tr>
      
      <td>userId</td>
      
      <td>Tittle</td>
      <td>Completed</td>
    </tr>
  </thead>
  <tbody>
      {
          todo?.map?.(todo =>{
              return(
                  <tr>
                      <td>{todo?.userId}</td>
                      <td>{todo?.title}</td>
                      <td>{todo?.completed}</td>
                  </tr>
              )
          })
      }
    
    
  </tbody>
</table>
        </div>
    )
}
export  default App;