import { Component } from '@angular/core';
import { NewItemService } from '../service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'new-media-item-list',
  templateUrl: 'new-item-list.component.html',
  styleUrls: ['new-item-list.component.css'],
})
export class NewItemListComponent {

  
  newItems =[];
  paramsSubscription;


  constructor(
    private newItemService: NewItemService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params
      .subscribe(params => {
      this.getNewItems();
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onNewItemDelete(newItem) {
    this.newItemService.delete(newItem)
      .subscribe(() => {
        this.getNewItems();
      });
   }
  
  getNewItems() {
    this.newItemService.get()
      .subscribe(response => {
        this.newItems = response;
      });
  }
  
}
