import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //IsLogged 
  private isLogged: boolean = false;
  private name?: string;
  //userToken

  constructor(private http: HttpClient) { }


  //Login
  public Login(email: string, password: string) {
    this.http.post('https://lab016.s1.2isa.org/api/login', {
      email: email,
      password: password
    }).subscribe({
      next: (result: any) => {
        console.log(result);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }
  //Logout


}
