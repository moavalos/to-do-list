import { TodoService } from './../shared/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: any[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.firestoreCollection.valueChanges({ idField: 'id' })
      .subscribe(item => {
        this.todos = item.sort((a: any, b: any) => { return a.isDone - b.isDone });
      })
  }

  onClick(titleInput: HTMLInputElement) {
    if (titleInput.value) {
      this.todoService.addTodo(titleInput.value);
      titleInput.value = "";
    }
  }

  onStatusChange(id: string, newStatus: boolean) {
    this.todoService.updateTodoStatus(id, newStatus);
  }

  onDelete(id: string) {
    this.todoService.deleteTodo(id);
  }

}
