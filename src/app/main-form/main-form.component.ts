import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit,OnDestroy {

  itemList: string[] = []
  todoFormGroup: FormGroup;
  formBuilder: FormBuilder;
  constructor(fb: FormBuilder) {
    this.formBuilder = fb;
    this.todoFormGroup = this.createForm()
   }

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
      this.todoFormGroup.reset();
  }
  

  createForm(): FormGroup {
    return this.formBuilder.group(
      {
        todoItem: ['',Validators.required]
      }
    )
  }
  getValue(){
    return this.todoFormGroup.value.todoItem;
  }
  createItem(){
    this.itemList.push(this.getValue())
    this.todoFormGroup.reset();
  }
}

export interface TodoForm {
  todoItem: FormControl;
}
export class TodoItem {

  constructor(public anItem: string){

  }
}