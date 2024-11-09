import { Component } from '@angular/core';
import {RouterModule, RouterOutlet, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { FiltertaskPipe } from './pipes-task/filtertask.pipe';
import { TaskService } from './task.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent, RouterModule,FiltertaskPipe,RouterOutlet,TooltipModule,ToastrModule,BsDatepickerModule],
  providers:[TaskService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskManagement';

  constructor(){

  }

  ngOnInit():void{
 
  }
  
}
