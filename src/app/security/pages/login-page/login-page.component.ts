import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ns-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLogged$.subscribe(logged => {
      if (logged) { this.router.navigate([""]); }
    });

  }
  ngOnInit(): void {

  }


}
