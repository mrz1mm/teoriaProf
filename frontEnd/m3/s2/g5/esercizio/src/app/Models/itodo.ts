import { iUser } from "./iuser";

export interface iTodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;

  author?: iUser
}
