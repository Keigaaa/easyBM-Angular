import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/services/auth.service';

@Component({
  selector: 'ns-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(public authService: AuthService) { }



}
