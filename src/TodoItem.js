import {
  Container,
  makeStyles,
  Grid,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import {toggleCompeted ,deleteTodo} from "./redux/slice/todoSlice";

const useStyles = makeStyles({
  style: {
    margin: 30,
   
  },
});



export default function TodoItem({id, title, completed}) {
  const dispatch = useDispatch();
  const classes = useStyles();
  
  const handleCompletedClick = ()=>{
    dispatch(
      toggleCompeted({id: id, completed: !completed})
    );
  };

  const handleDeleteClick = () =>{
    dispatch(deleteTodo({id: id}));
  };
  return (
    <Container>
      <Grid container>
     
        <Grid item xs={12} md={8}>
        
        <FormControlLabel
        
          control={<Checkbox />}
          label= {title}
          labelPlacement="end"
          checked={completed}
          onChange={handleCompletedClick}
        />
   
        </Grid>
        <Grid item xs={12} md={4}>
          <Button onClick={handleDeleteClick} className={classes.style} variant="contained" color="primary">
            Delete
          </Button>
        </Grid>
      </Grid>
     
    </Container>
  );
}
