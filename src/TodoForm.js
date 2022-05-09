import {useState} from "react";
import { Container, TextField, Typography, Button, makeStyles  } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/slice/todoSlice";



const useStyles = makeStyles({
    field:{
        marginBottom: 20,
        marginTop: 10,
    },
    btn:{
      marginBottom: 20,
    }
})

export default function TodoForm() {
  const [value , setValue] = useState("");
  const dispatch = useDispatch();

    const classes = useStyles();
    const onSubmit = (e)=> {
      e.preventDefault();
      dispatch(

        addTodo({
          title: value,
          

        })
      )
    };
    
  return (
    <Container>
      <Typography
        variant="h5"
        gutterBottom
        component="h2"
      >
        My ToDo List
      </Typography>

      <form onSubmit={onSubmit} >
        <TextField
        className={classes.field}
        value={value}
        onChange={(e)=> setValue(e.target.value)}
          variant="outlined"
          label="Add Todo"
          color="secondary"
          fullWidth
          required

        
        />
        <Button  className={classes.btn} type="submit" variant="contained" color="primary">submit</Button>
      </form>
    </Container>
  );
}
