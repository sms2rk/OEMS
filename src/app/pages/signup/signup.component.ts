import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SignUpData=new FormGroup({
    username:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    firstname:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    lastname:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    email:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    phone:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)])
  })


  constructor(private SignupService: SignupService, private router:Router){}

  ngOnInit(): void {

  }

  sendSignUpData(){
    console.log(this.SignUpData.value);
    this.SignupService.saveUser(this.SignUpData.value).subscribe((res)=>{

    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `${res}`,  
    timer: 1500,
  });

    this.router.navigate(['login'])
    },(err:any)=>{

    Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: `${err}`,  
    timer: 1500
      });
    this.router.navigate(['userdashbord'])

    })}

  }


 

  