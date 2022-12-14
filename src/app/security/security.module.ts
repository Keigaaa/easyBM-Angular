import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { IconsModule } from '../icons/icons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    IconsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    LoginPageComponent,
  ]
})
export class SecurityModule { }
