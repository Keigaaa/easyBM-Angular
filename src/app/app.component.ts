import { Component } from '@angular/core';
import { AuthService } from './security/services/auth.service';

@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'easyBM';
  user: { name: string, token: string } = { name: 'Keiga', token: "" };
  ;

  constructor(public authService: AuthService) {
    this.authService.isLogged$.subscribe(isLogged => {
      if (isLogged) {
        this.user.name = this.authService.name!;
        this.user.token = this.authService.token!;
      }
    })


  }


}
