import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NewItemService } from 'app/service/new-item.service';

@Component({
  selector: 'new-item ',
  templateUrl: 'new-item.component.html',
  styleUrls: ['new-item.component.css']
})
export class NewItemComponent {
  childs= [];
  
  @Input() newItem;
  @Output() delete = new EventEmitter();
  @Output() parentIdClick = new EventEmitter();
  constructor(private newItemService: NewItemService) {}

  onDelete(){
    this.delete.emit(this.newItem);
  }
  
  onNewChildDelete(child) {
    this.newItemService.deleteChild(child)
      .subscribe(() => {
        this.getNewChild();
      });
   }

   getNewChild() {
    this.newItemService.get()
      .subscribe(response => {
        this.childs = response;
      });
  }

  onClick(item) {
    this.parentIdClick.emit(item);
    console.log(item)
  }
 

 }
