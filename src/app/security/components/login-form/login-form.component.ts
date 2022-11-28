import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ns-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required])
  }, { updateOn: 'submit' });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  /**
   * 
   * @param error string
   * @returns Returns a message when the email is not valid
   */
  getEmailMessageError(error: string) {
    switch (error) {
      case "required":
        return "Le champ email ne doit pas être vide."
      case "email":
        return "L'email doit être valide."
      default: return "";
    }
  }

  /**
   * 
   * @param error string
   * @returns Returns a message when the password is not valid
   */
  getPasswordMessageError(error: string) {
    switch (error) {
      case "required":
        return "Le champ password ne doit pas être vide."
      default: return "";
    }
  }

  /**
   * Saves the email and password of the form in constant
   */
  submitLoginForm() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.Login(email, password);
  }

  /**
   * 
   * @param formControlName string
   * @param typeError string
   * @returns Returns informations about the error detected
   */
  loginFormControlHasError(formControlName: string, typeError: string) {
    let control = this.loginForm.get(formControlName);
    return control?.dirty && control.hasError(typeError)
  }
}


