import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NewItemService } from '../service';


@Component({
  selector: 'new-item-form',
  templateUrl: 'new-item-form.component.html',
  styleUrls: ['new-item-form.component.css'],
})
export class NewItemFormComponent {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private newItemService: NewItemService,
   ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('', Validators.compose([
      Validators.required,
      Validators.pattern('[\\w\\-\\s\\/]+')])),
      image: this.formBuilder.control('', Validators.required)
    });
  }

  

  onSubmit(newItem){
     this.newItemService.add(newItem)
      .subscribe();
      this.addFile()
  }

  addFile(){
       this.newItemService.upload(this.file)
            .subscribe();
  
  }

  //Select image and remember it
  file: File;
  onChange(event: EventTarget) {
        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];
        console.log(this.file);
        
    }

} 