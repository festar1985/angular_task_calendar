import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Task} from "../../Task"
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
  @Input() task:Task
  @Output() btnXonClick = new EventEmitter()
  @Output() onToggleChangeReminder = new EventEmitter()
  faTimes=faTimes;

  onClick(task:Task) {
    this.btnXonClick.emit(task)
  } 
  ondblclick(task:Task) {
    this.onToggleChangeReminder.emit(task)
   
  }
}
