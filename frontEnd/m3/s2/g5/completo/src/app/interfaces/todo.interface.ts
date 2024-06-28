import { User } from "./user.interface";

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;

  user?: User
}
