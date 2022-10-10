import {Component} from '@angular/core';
import {Task} from "./task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode = false;
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
  taskDate = '';

  // @ts-ignore
  config: { [key: string]: string };
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2022-01-02',
      done: false
    },
    {
      name: 'Nauka Angulara',
      deadline: '2022-01-03',
      done: false
    },
    {
      name: 'Sprzatanie',
      deadline: '2022-01-04',
      done: false
    },
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: 'Lista zadań zbudowana w Angularze.',
        date: new Date().toDateString()
      };
    }, 500);
    this.sortTask();
  }

  clearTasks() {
    this.tasks = [];
  }


  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTask();
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(taks: Task) {
    taks.done = true;
    this.sortTask();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTask();
  }

  private sortTask() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1);
  }
}
