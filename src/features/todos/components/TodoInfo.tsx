import { FC, Fragment } from "react";
import { Typography, Button, Box } from "@material-ui/core";
import { DoneButton } from "./DoneButton";
import { PriorityBadge } from "./PriorityBadge";
import { Modal } from "../../../components/Modal";
import { useAppDispatch } from "../../../app/hooks";
import { markAsCompleted, remove } from "../../todos/todosSlice";
import { ITodo } from "../../../constants/types";

interface ITodoInfoProps {
  open: boolean;
  onClose: () => void;
  onEditClick: () => void;
  initialTodo?: ITodo;
}

export const TodoInfo: FC<ITodoInfoProps> = ({
  open,
  onClose,
  onEditClick,
  initialTodo,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Modal open={open} onClose={onClose}>
      <Fragment>
        <PriorityBadge priority={initialTodo?.priority} />
        <Typography gutterBottom variant="h5" component="h2">
          {initialTodo?.title}
        </Typography>
        <Typography>{initialTodo?.description}</Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => {
              onEditClick();
              onClose();
            }}
          >
            Edit Task
          </Button>
          <DoneButton
            variant="contained"
            size="small"
            color="primary"
            onClick={() => {
              if (initialTodo?.id) {
                dispatch(markAsCompleted(initialTodo.id));
                onClose();
              }
            }}
          >
            Done Task
          </DoneButton>
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={() => {
              if (initialTodo?.id) {
                dispatch(remove(initialTodo.id));
                onClose();
              }
            }}
          >
            Delete Task
          </Button>
        </Box>
      </Fragment>
    </Modal>
  );
};
