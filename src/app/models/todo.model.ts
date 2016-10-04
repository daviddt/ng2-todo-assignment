let todoId = 0;

export class Todo {
  completed: boolean = false;
  editing: boolean = false;
  id: number = todoId++;

  constructor(public title: string) {}

  public setTitle(title: string): void {
    this.title = title;
  };

  public setEditing(isEditing: boolean) {
    this.editing = isEditing;
  }
}