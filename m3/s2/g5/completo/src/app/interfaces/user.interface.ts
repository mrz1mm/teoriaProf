import { Todo } from "./todo.interface";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  title: string;
  todos?: Todo[]
}

