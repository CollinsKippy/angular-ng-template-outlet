import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  VERSION,
  ViewChild,
} from '@angular/core';

export type Todo = {
  name: string;
  isCompleted: boolean;
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  items: string[] = ['Alice', 'Ali', 'Antony', 'Asmadi'];

  todos: Todo[] = [
    { name: 'Read Book', isCompleted: true },
    { name: 'Eat Lunch', isCompleted: false },
    { name: 'Exercise', isCompleted: false },
    { name: 'Sleep', isCompleted: true },
    { name: 'Watch Lecture', isCompleted: false },
  ];

  allTodosCompleted = false;

  ngOnInit(): void {}

  onUpdate(todo: Todo) {
    todo.isCompleted = true;

    this.checkIfAllTodosDone();
  }

  checkIfAllTodosDone() {
    this.allTodosCompleted = this.todos.every((t) => t.isCompleted);
  }
}
