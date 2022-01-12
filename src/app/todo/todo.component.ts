import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  newTaskTitle: string = 'New Task';
  constructor() { }
  tasks: Task[] = [
    { title: "Task a" },
    { title: "Task b", completed: true },
    { title: "Task c" }
  ];
  ngOnInit(): void {
  }
  addTask() {
    this.tasks.push({ title: this.newTaskTitle });
    this.newTaskTitle = '';
  }
}
interface Task {
  title: string;
  completed?: boolean;
}
