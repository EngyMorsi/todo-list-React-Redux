import React from "react";
import TodoItem from "./TodoItem";
import {
  Container,
  Grid,
} from "@material-ui/core";
import { useSelector } from "react-redux";



export default function TodoList() {
  const todos = useSelector((state)=> state.todos);
  
  // const todos = [
  //   { id: 1, title: "todo1", completed: false },
  //   { id: 2, title: "todo2", completed: false },
  //   { id: 3, title: "todo3", completed: false },
  //   { id: 4, title: "todo4", completed: false },
  //   { id: 5, title: "todo5", completed: false },
  // ];
  return (
    <Container>
      <Grid container>
          {todos.map((todo) =>(
            
              <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
          ))}
       
      </Grid>
    </Container>
  );
}
