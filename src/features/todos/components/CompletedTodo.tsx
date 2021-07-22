import { FC } from "react";
import { Typography, Card, CardContent, Grid } from "@material-ui/core";
import { ITodo } from "../../../constants/types";
import { PriorityBadge } from "./PriorityBadge";

interface ICompletedTodoProps {
  todo: ITodo;
}

export const CompletedTodo: FC<ICompletedTodoProps> = ({ todo }) => {
  return (
    <Grid item key={todo.id} xs={12}>
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {todo.title}
          </Typography>
          <Typography>{todo.description}</Typography>
          <PriorityBadge priority={todo.priority} />
        </CardContent>
      </Card>
    </Grid>
  );
};
