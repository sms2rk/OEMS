import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginData=new FormGroup({
    username:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    password:new FormControl(null,[Validators.required,Validators.maxLength(3),Validators.maxLength(50)])
  })

  constructor(private loginservice:LoginService, private router:Router){ }

  ngOnInit(): void {
    
  }

  sendLoginData()
  {
    console.log(this.loginData.value);
    this.loginservice.generateToken(this.loginData.value).subscribe((res:any)=>{
      console.log(res) 
      this.loginservice.loginUser(res.token);
      this.loginservice.getCurrentUser().subscribe((res:any)=>{
        console.log(res);
        this.loginservice.setUser(res);
        if(this.loginservice.getUserRol()=="ADMIN"){
          this.router.navigate(['admin-dashbord']);
          this.loginservice.loginStatusSubject.next(true)
        }else if(this.loginservice.getUserRol()=="NORMAL"){
          this.router.navigate(['user-dashbord']);
          this.loginservice.loginStatusSubject.next(true)
        }else{
          this.loginservice.logOut()
        }
        },(err)=>{console.log(err);
        })
    },(err)=>{  
      console.log(err);
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'IN VALID USER',  
        timer: 1500
      })
    })
  }
}
