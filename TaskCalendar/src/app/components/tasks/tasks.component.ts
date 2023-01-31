import { Component, OnInit } from '@angular/core';
import {Task} from "../../Task"
import {TaskService} from "../../services/task.service"
import { faTachographDigital } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  tasks: Task[] = [];

  constructor(private taskService:TaskService) {}
  
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks:Task[]) => {
      this.tasks=tasks
    });
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks=this.tasks.filter(t=>t.id !== task.id)
      return this.tasks
    });
  }

  changeReminder(task:Task){
    task.reminder=!task.reminder
    this.taskService.changeTaskReminder(task).subscribe()
  }

  addTask(task:Task) {
    this.taskService.addTask(task).subscribe((task:Task) => {
      this.tasks.push(task)
    });
  }
}
