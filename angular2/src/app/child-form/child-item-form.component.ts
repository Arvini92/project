import { Component, Input} from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NewItemService } from '../service';


@Component({
  selector: 'child-item-form',
  templateUrl: 'child-item-form.component.html',
  styleUrls: ['new-item-form.component.css'],
})
export class ChildItemFormComponent {
  form;
  parentId;
   
  constructor(
    private formBuilder: FormBuilder,
    private newItemService: NewItemService,
    ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('', Validators.compose([
      Validators.required,
      Validators.pattern('[\\w\\-\\s\\/]+')])),
      parentId: this.formBuilder.control(this.parentId),
      image: this.formBuilder.control('', Validators.required)
    });
   
  }

  
  onSubmitChild(child){
     this.newItemService.addChild(child)
      .subscribe(); 
      this.addFile();
  }

  addFile(){
       this.newItemService.upload(this.file)
            .subscribe();
  
  }

  //Select image and remember it
  file: File;
  onChangeChild(event: EventTarget) {
        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];
        console.log(this.file);
        
    }
    onParentIdClick(item) {
      this.parentId = item;
      console.log(this.parentId)
    }
    onChildIdClick(item) {
      this.parentId = item;
      console.log(this.parentId)
    }
    

} 