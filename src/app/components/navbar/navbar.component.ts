import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  islogdIn=true;
  constructor(private loginservice:LoginService,
  private router:Router){}
  user:any;

  ngOnInit(): void {
    this.islogdIn = this.loginservice.isLogdIn();
    this.user= this.user=this.loginservice.getUser();
    this.loginservice.loginStatusSubject.asObservable().subscribe((res:any)=>{
    this.islogdIn =this.loginservice.isLogdIn();
    this.user = this.loginservice.getUser();

    })

    
  }

  logOut(){
  this.loginservice.logOut()
  this.loginservice.loginStatusSubject.next(false)
  this.router.navigate(['login'])
  }
  
}
