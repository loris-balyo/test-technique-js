export enum TodoStatus {
  DONE = "done",
  PENDING = "pending",
}

export interface Todo {
  title: string;
  description: string;
  status: TodoStatus;
}
