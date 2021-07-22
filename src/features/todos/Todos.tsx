import { Fragment, useState, useCallback } from "react";
import {
  CssBaseline,
  Typography,
  Button,
  Box,
  Grid,
  Container,
  AppBar,
  Toolbar,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { Todo } from "./components/Todo";
import { AddTodo } from "./components/AddTodo";
import { EditTodo } from "./components/EditTodo";
import { TodoInfo } from "./components/TodoInfo";
import { CompletedTodos } from "./components/CompletedTodos";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { markAsCompleted, selectTodos } from "../todos/todosSlice";
import { ITodo } from "../../constants/types";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    paddingTop: theme.spacing(3),
  },
  fab: {
    right: theme.spacing(3),
    bottom: theme.spacing(3),
    position: "fixed",
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));

export const Todos = () => {
  const classes = useStyles();
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  const [addTodoOpen, setAddTodoOpen] = useState(false);
  const [completedTodoOpen, setCompletedTodoOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState<ITodo | undefined>(undefined);
  const [visitingTodo, setVisitingTodo] = useState<ITodo | undefined>(
    undefined
  );

  const toggleAddTodoOpen = useCallback(
    () => setAddTodoOpen((prev) => !prev),
    []
  );
  const toggleCompletedTodoOpen = useCallback(
    () => setCompletedTodoOpen((prev) => !prev),
    []
  );
  const closeEditTodoModal = useCallback(() => setEditingTodo(undefined), []);
  const openEditTodoModal = useCallback((todo) => setEditingTodo(todo), []);
  const closeTodoInfoModal = useCallback(() => setVisitingTodo(undefined), []);
  const openTodoInfoModal = useCallback((todo) => setVisitingTodo(todo), []);

  return (
    <Fragment>
      <CssBaseline />
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.toolbarTitle}>
            Todos
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            onClick={toggleCompletedTodoOpen}
          >
            View Done Tasks
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        {todos.length === 0 ? (
          <Box my={3} justifyContent="center" display="flex">
            <Button
              variant="contained"
              disableElevation
              color="primary"
              onClick={toggleAddTodoOpen}
            >
              Create Your First Task :)
            </Button>
          </Box>
        ) : (
          <Container className={classes.heroContent}>
            <Grid container spacing={4}>
              {todos.map((todo) => (
                <Todo
                  todo={todo}
                  onEditClick={() => openEditTodoModal(todo)}
                  onDoneClick={() => dispatch(markAsCompleted(todo.id))}
                  onClick={() => openTodoInfoModal(todo)}
                />
              ))}
            </Grid>
            <Fab
              className={classes.fab}
              color="secondary"
              aria-label="add"
              onClick={toggleAddTodoOpen}
            >
              <AddIcon />
            </Fab>
          </Container>
        )}
      </main>
      <TodoInfo
        initialTodo={visitingTodo}
        open={visitingTodo !== undefined}
        onClose={closeTodoInfoModal}
        onEditClick={() => openEditTodoModal(visitingTodo)}
      />
      <AddTodo open={addTodoOpen} onClose={toggleAddTodoOpen} />
      <EditTodo
        initialTodo={editingTodo}
        open={editingTodo !== undefined}
        onClose={closeEditTodoModal}
      />
      <CompletedTodos
        open={completedTodoOpen}
        onClose={toggleCompletedTodoOpen}
      />
    </Fragment>
  );
};
