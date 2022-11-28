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

  private _isLogged = new BehaviorSubject<Boolean>(false);
  private _name: string | undefined;
  private _token: string | undefined;

  /**
   * Look at the observable _isLogged
   */
  public get isLogged$() {
    return this._isLogged.asObservable();
  }

  /**
   * Return the value of _isLogged
   */
  public get isLogged() {
    return this._isLogged.getValue();
  }

  /**
   * Return the value of the _name
   */
  public get name(): string | undefined {
    return this._name;
  }

  /**
   * Return the value of the _token
   */
  public get token(): string | undefined {
    return this._token;
  }

  constructor(private http: HttpClient) { }

  /**
   * Checks that the email and password passed are correct and either returns an error or allow the user to log in
   * @param email string
   * @param password string
   */
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

  /**
   * Allows the user to log out
   */
  public logout() {
    this._isLogged.next(false);
    this._token = undefined;
    this._name = undefined;
  }

}
