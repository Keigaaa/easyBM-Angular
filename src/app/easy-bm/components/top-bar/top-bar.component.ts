import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/services/auth.service';

@Component({
  selector: 'ns-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
