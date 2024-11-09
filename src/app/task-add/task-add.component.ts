import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { User, UserService } from '../../user.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, CommonModule,BsDatepickerModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent implements OnInit {
  taskForm:FormGroup;
  users: User[] = [];

  constructor(private Fb:FormBuilder, private taskService:TaskService,private router:Router, private toastr:ToastrService,private userService: UserService){
    this.taskForm=this.Fb.group({
      title:['',[Validators.required]],
      description:[''],
      dueDate:[''],
      priority:['',[Validators.required]],
      assigneeId:[''],
      checkLists : this.Fb.array([])
    }) 
  }


  get myCheckLists(): FormArray {
    return this.taskForm.get('checkLists') as FormArray;
  }
   
   
  addCheckList(){
    this.myCheckLists.push(this.Fb.group({
      name : [''],
      isDone : [false]
    }))
  }


  removeCheckLists(index:number){
    this.myCheckLists.removeAt(index);
  }
  ngOnInit(): void {

    this.userService.getUser().subscribe(data =>{
      console.log(data)
      this.users = data;
    })
  }


  close(){
    this.taskForm.reset();
  }
  onCancel(){
    // this.router.navigate
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    let task=this.taskForm.value;
    console.log(task);
    this.taskService.createTask(task).subscribe(data=>{
      alert("Task is created successfully")

    })
  }
}
