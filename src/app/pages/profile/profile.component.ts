import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginService/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userdata:any;
  constructor(private loginservice:LoginService){}
  ngOnInit(): void {
    this.userdata = this.loginservice.getUser();
    if(this.userdata.profile=="default.pgn"){
      this.userdata.profile='../../../assets/img/vector-users-icon.webp'
    }
  }

}
