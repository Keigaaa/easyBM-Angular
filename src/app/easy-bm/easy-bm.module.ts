import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../security/guards/auth.guard';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { EasyBMService } from './services/easy-bm.service';
import { MainComponent } from './components/main/main.component';
import { IconsModule } from '../icons/icons.module';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
]
@NgModule({
  declarations: [
    HomePageComponent,
    TopBarComponent,
    MainComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule
  ],
  providers: [EasyBMService]
})
export class EasyBMModule { }
