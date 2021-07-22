import { FC } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Grid,
  Box,
} from "@material-ui/core";
import { DoneButton } from "./DoneButton";
import { ITodo } from "../../../constants/types";
import { PriorityBadge } from "./PriorityBadge";

interface ITodoProps {
  todo: ITodo;
  onEditClick: () => void;
  onClick: () => void;
  onDoneClick: () => void;
}

export const Todo: FC<ITodoProps> = ({
  todo,
  onDoneClick,
  onEditClick,
  onClick,
}) => {
  return (
    <Grid item key={todo.id} xs={12} sm={6} md={4}>
      <Card variant="outlined">
        <CardActionArea onClick={onClick}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {todo.title}
            </Typography>
            <Typography>{todo.description}</Typography>
          </CardContent>

          <Box display="flex" justifyContent="space-between" flex={1}>
            <CardActions>
              <DoneButton
                variant="contained"
                size="small"
                color="primary"
                onClick={(e) => {
                  e.stopPropagation();
                  onDoneClick();
                }}
              >
                Done Task
              </DoneButton>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={(e) => {
                  e.stopPropagation();
                  onEditClick();
                }}
              >
                Edit Task
              </Button>
            </CardActions>
            <PriorityBadge priority={todo.priority} />
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
