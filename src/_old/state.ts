export interface ITodo {
  id: number;
  completed: boolean;
  text: string;
}

export interface State {
  todos: ITodo[];
  visibilityFilter: string;
  isOn: boolean;
}