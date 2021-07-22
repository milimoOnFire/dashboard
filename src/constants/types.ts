export interface ITodo {
  id: number;
  title: string;
  description: string;
  gifts: string;
  completed: boolean;
  priority: string;
}

export interface ICreateTodo {
  title: string;
  description: string;
  gifts: string;
  priority: string;
}

export const EmptyTodo: ICreateTodo = {
  title: "",
  description: "",
  gifts: "",
  priority: "Low",
};