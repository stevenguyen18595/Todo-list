import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit,OnDestroy {
  itemList: TodoItem[] = []
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
  getValueFromForm(){
    return this.todoFormGroup.value.todoItem;
  }
  createATodoItem(): TodoItem{
    return new TodoItem (this.getValueFromForm());
  }
  createItem(){
    this.itemList.push(this.createATodoItem());
    console.log('show itemlist when create'+ this.itemList.length);
  }
  removeItem(value:string){
    this.itemList.forEach((element,index)=>{
      if(element.value == value) this.itemList.splice(index,1);
    })
    console.log('show item list when remove' +this.itemList.length)
  }
}

export interface TodoForm {
  todoItem: FormControl;
}
export class TodoItem {

  constructor(public value: string){

  }
}