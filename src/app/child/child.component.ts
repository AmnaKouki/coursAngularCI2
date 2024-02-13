import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  ngOnInit(){}

  @Input() nom :string;
  @Output() message = new EventEmitter<number>();

  note :number;
  buttonStatus = false;
  constructor() { }
  send(){
    this.message.emit(this.note);
    this.buttonStatus = true;
  }

}
