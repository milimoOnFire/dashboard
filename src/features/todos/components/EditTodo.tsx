import { FC, useState, ChangeEvent, SyntheticEvent, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Radio,
  FormControlLabel,
  Box,
  Button,
} from "@material-ui/core";
import { Modal } from "../../../components/Modal";
import { useAppDispatch } from "../../../app/hooks";
import { edit } from "../../todos/todosSlice";
import { ICreateTodo, ITodo, EmptyTodo } from "../../../constants/types";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  submitButton: {
    display: "flex",
    margin: "auto",
  },
}));

interface IEditTodoProps {
  open: boolean;
  onClose: () => void;
  initialTodo?: ITodo;
}

interface IErrors {
  title?: string;
  description?: string;
  gifts?: string;
}

export const EditTodo: FC<IEditTodoProps> = ({
  open,
  onClose,
  initialTodo,
}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState<ICreateTodo>(EmptyTodo);
  const [errors, setErrors] = useState<IErrors>({});

  useEffect(() => {
    if (!open) {
      setErrors({});
    }
  }, [open]);
  useEffect(() => {
    if (initialTodo !== undefined) {
      setTodo(initialTodo);
    }
  }, [initialTodo]);
  const handleChange = (
    key: string,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setTodo((prev) => Object.assign({}, prev, { [key]: event.target.value }));
  };

  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    let formErrors: IErrors = {};
    if (todo.title.length === 0) {
      formErrors.title = "Incorrect Title.";
    }
    if (todo.description.length === 0) {
      formErrors.description = "Incorrect Description.";
    }
    if (todo.gifts.length === 0) {
      formErrors.gifts = "Incorrect Gifts.";
    }
    if (Object.keys(formErrors).length === 0 && initialTodo?.id) {
      dispatch(edit({ id: initialTodo.id, todo }));
      onClose();
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Task Title"
          variant="outlined"
          helperText={errors.title}
          error={errors.title !== undefined}
          value={todo.title}
          onChange={(event) => handleChange("title", event)}
        />
        <TextField
          id="outlined-multiline-static"
          label="Task Description"
          multiline
          rows={4}
          variant="outlined"
          helperText={errors.description}
          error={errors.description !== undefined}
          value={todo.description}
          onChange={(event) => handleChange("description", event)}
        />
        <TextField
          id="outlined-basic"
          label="Gifts and KPI for this task :)"
          variant="outlined"
          helperText={errors.gifts}
          error={errors.gifts !== undefined}
          value={todo.gifts}
          onChange={(event) => handleChange("gifts", event)}
        />
        <Box display="flex" justifyContent="space-between" mb={2}>
          <FormControlLabel
            value="Low"
            control={
              <Radio
                checked={todo.priority === "Low"}
                onChange={(event) => handleChange("priority", event)}
                value="Low"
                name="radio-button-demo"
                inputProps={{ "aria-label": "Low" }}
                color="primary"
              />
            }
            label="Low"
          />
          <FormControlLabel
            value="Medium"
            control={
              <Radio
                checked={todo.priority === "Medium"}
                onChange={(event) => handleChange("priority", event)}
                value="Medium"
                name="radio-button-demo"
                inputProps={{ "aria-label": "Medium" }}
                color="primary"
              />
            }
            label="Medium"
          />
          <FormControlLabel
            value="High"
            control={
              <Radio
                checked={todo.priority === "High"}
                onChange={(event) => handleChange("priority", event)}
                value="High"
                name="radio-button-demo"
                inputProps={{ "aria-label": "High" }}
                color="primary"
              />
            }
            label="High"
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.submitButton}
          type="submit"
        >
          Edit Task
        </Button>
      </form>
    </Modal>
  );
};
