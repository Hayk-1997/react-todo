import React, { useState, useEffect, lazy, Suspense } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoRequest } from "../../store/todo/actions";
import { ITodo } from "../../store/todo/types";
import {AppState} from "../../store/rootReducer";

type setToDo = {
    title: string
}

const handleOpenItemModal = () => {
    console.log(123132);
}

const ToDoList = React.lazy(() => import('./List/index'));

const ToDo: React.FC = () => {
    const dispatch = useDispatch();
    const getToDos = useSelector((state: AppState) => state.todo);
    const [toDos, setToDos] = useState<ITodo[]>([]);
    const [todo, setToDo] = useState<setToDo>({ title: '' });

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setToDo({ title: event.target.value });

    useEffect(() => {
        dispatch(fetchTodoRequest());
    }, []);

    useEffect(() => {
        getToDos.toDos.length && setToDos(getToDos.toDos);
    }, [getToDos]);
    
    const addToDo = () => {
        setToDos( (prevState) => [
            ...prevState,
            {
                id: Date.now(),
                title: todo.title,
            }
        ])
    };

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item lg={12}>
                <Grid direction="row" container justify="space-around">
                    <Grid item lg={8}>
                        <TextField
                            fullWidth
                            name="todo"
                            onChange={(event) => handleChange(event)}
                        />
                    </Grid>
                    <Grid item lg={2}>
                        <Button variant="contained" color="primary" onClick={addToDo}>
                            Primary
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <List dense={false} style={{ width: '100%' }}>
                <Suspense  fallback={<div>Loading...</div>}>
                { toDos.map((todo) => <ToDoList key={todo.id} todo={todo} handleOpenItemModal={handleOpenItemModal} />) }
                </Suspense>

            </List>
        </Grid>
    )
};

export default ToDo;
