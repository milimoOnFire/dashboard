import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ITodo, ICreateTodo } from "../../constants/types";

const initialState: ITodo[] = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ICreateTodo>) => {
      state.push(
        Object.assign({}, action.payload, {
          id: state.length + 1,
          completed: false,
        })
      );
    },
    edit: (state, action: PayloadAction<{ id: number; todo: ICreateTodo }>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      if (index > -1) {
        state[index].title = action.payload.todo.title;
        state[index].description = action.payload.todo.description;
        state[index].gifts = action.payload.todo.gifts;
        state[index].priority = action.payload.todo.priority;
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
    markAsCompleted: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index > -1) {
        state[index].completed = true;
      }
    },
  },
});

export const { add, edit, remove, markAsCompleted } = todosSlice.actions;

export const selectTodos = (state: RootState) =>
  state.todos.filter((todo) => !todo.completed);
export const selectCompletedTodos = (state: RootState) =>
  state.todos.filter((todo) => todo.completed);

export default todosSlice.reducer;
