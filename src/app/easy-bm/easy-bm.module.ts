import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../security/guards/auth.guard';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { EasyBMService } from './services/easy-bm.service';
import { MainComponent } from './components/main/main.component';
import { IconsModule } from '../icons/icons.module';
import { SpeedDialButtonComponent } from './components/speed-dial-button/speed-dial-button.component';
import { SearchAndBreadcrumbTrailComponent } from './components/search-and-breadcrumb-trail/search-and-breadcrumb-trail.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BreadcrumbTrailComponent } from './components/breadcrumb-trail/breadcrumb-trail.component';
import { FolderContainerComponent } from './components/folder-container/folder-container.component';
import { BookmarkContainerComponent } from './components/bookmark-container/bookmark-container.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
]
@NgModule({
  declarations: [
    HomePageComponent,
    TopBarComponent,
    MainComponent,
    SpeedDialButtonComponent,
    SearchAndBreadcrumbTrailComponent,
    SearchBarComponent,
    BreadcrumbTrailComponent,
    FolderContainerComponent,
    BookmarkContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule,
  ],
  providers: [EasyBMService]
})
export class EasyBMModule { }
