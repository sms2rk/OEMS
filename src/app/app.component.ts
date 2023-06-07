import { Component } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'oems1.1';
  demourl=enviroment.baseUrl;
}
