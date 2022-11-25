import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APIResponse } from 'src/app/data-models/api-response-model';
import { LoginResponse } from 'src/app/data-models/login-response-model';
import { environment } from 'src/environments/environment';


//Observable<T> => création tu peux envoyer des données jusqu' à que tu le ferme
//Subject<T> => On le créer sans valeur  et à tout moments on peut changer sa valeur
//BehaviorSubject<T> => On le créer avec une valeur et à tout moments on peut changer sa valeur, on peut aussi lire à tout moments sa valeur



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //IsLogged 
  private _isLogged = new BehaviorSubject<Boolean>(false);
  public get isLogged$() {
    return this._isLogged.asObservable();
  }
  public get isLogged() {
    return this._isLogged.getValue();
  }

  private _name: string | undefined;
  public get name(): string | undefined {
    return this._name;
  }

  private _token: string | undefined;
  public get token(): string | undefined {
    return this._token;
  }
  //userToken

  constructor(private http: HttpClient) { }


  public Login(email: string, password: string) {
    this.http.post<APIResponse<LoginResponse>>(environment.apis.bookmarks + 'login', {
      email: email,
      password: password
    }).subscribe({
      next: (result) => {
        if (result.success) {
          this._token = result.data?.token;
          this._name = result.data?.name;
          this._isLogged.next(true);
        }
      },
      error: (err: any) => {
        this._isLogged.next(false);
        this._token = undefined;
        this._name = undefined;
      }
    });
  }

  //Logout
  public logout() {
    this._isLogged.next(false);
    this._token = undefined;
    this._name = undefined;
  }

}
