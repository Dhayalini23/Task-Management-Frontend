import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister, UserRegisterService } from '../user-register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  registerForm:FormGroup;
  UserRegister! : IUserRegister;
  Password? : string;
  
 

  constructor(private fb:FormBuilder, private userRegisterService : UserRegisterService , private toaster:ToastrService){
   

    this.registerForm = this.fb.group({
      fullName:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.maxLength(6)]],
      repeatPassword:['',Validators.maxLength(6)],
      roles: ['',Validators.required],
    })
  }

  onRegister(registerForm:any){
    this.UserRegister = registerForm.value;
    this.UserRegister.role = parseInt(registerForm.value.roles)
    
    this.userRegisterService.AddRegisterUser(this.UserRegister).subscribe(data =>{
      this.toaster.success("Sign Up Successfully", "Sign Up")
    })
     console.log(registerForm.value);
  }
}
