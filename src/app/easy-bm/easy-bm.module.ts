import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../security/guards/auth.guard';
import { TopBarComponent } from './components/top-bar/top-bar.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
]
@NgModule({
  declarations: [
    HomePageComponent,
    SideBarComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EasyBMModule { }
