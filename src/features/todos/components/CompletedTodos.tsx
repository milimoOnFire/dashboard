import { FC } from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { Modal } from "../../../components/Modal";
import { CompletedTodo } from "./CompletedTodo";
import { useAppSelector } from "../../../app/hooks";
import { selectCompletedTodos } from "../../todos/todosSlice";

interface ICompletedTodosProps {
  open: boolean;
  onClose: () => void;
}

export const CompletedTodos: FC<ICompletedTodosProps> = ({ open, onClose }) => {
  const completedTodos = useAppSelector(selectCompletedTodos);

  return (
    <Modal open={open} onClose={onClose}>
      <Grid container spacing={4}>
        {completedTodos.length === 0 ? (
          <Box my={3}>
            <Typography variant="h5" component="h2">
              No Completed Tasks
            </Typography>
          </Box>
        ) : (
          completedTodos.map((todo) => <CompletedTodo todo={todo} />)
        )}
      </Grid>
    </Modal>
  );
};
