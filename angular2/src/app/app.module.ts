import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app';
import { ChildItemComponent } from './child';
import { NewItemComponent } from './parent';
import { NewItemListComponent } from './parent-list';
import { NewItemFormComponent } from './parent-form';
import { NewItemService } from './service';
import { routing } from './routing';
import { ChildItemFormComponent } from './child-form';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
  ],
  declarations: [
    AppComponent,
    NewItemComponent,
    NewItemListComponent,
    NewItemFormComponent,
    ChildItemComponent,
    ChildItemFormComponent
  ],
  providers: [
    NewItemService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}