import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-item',
  templateUrl: 'child-item.component.html',
  styleUrls: ['child-item.component.css']
})
export class ChildItemComponent {
  
  @Input() child;
  @Output() deleteChild = new EventEmitter();
  @Output() childIdClick = new EventEmitter();

  onDeleteChild(){
    this.deleteChild.emit(this.child);
  }

  onClick(item) {
    this.childIdClick.emit(item);
    console.log(item)
  }
  
}
 
 