import React from 'react';
import { useSelector } from 'react-redux';


export default function TotalItems() {
  const completedTodos = useSelector((state) =>
  state.todos.filter((todo) => todo.completed === true));

  return (
    <div>
      <h2>TotalItems : {completedTodos.length}</h2>
    </div>
  )
}
