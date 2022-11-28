import { Routes } from '@angular/router';
import { HomePageComponent } from './easy-bm/pages/home-page/home-page.component';
import { AuthGuard } from './security/guards/auth.guard';
import { LoginPageComponent } from './security/pages/login-page/login-page.component';

export const ROUTES: Routes = [
    { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginPageComponent }
];

