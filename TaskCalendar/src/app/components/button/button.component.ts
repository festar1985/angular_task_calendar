import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
@Input() text:string = "default";
@Input() color:string = "black";
@Output() btnOnClick = new EventEmitter()

onClick() {
  this.btnOnClick.emit();
}
}
