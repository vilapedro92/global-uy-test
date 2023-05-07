import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from "./shared/components/layouts/auth-layout/auth-layout.component";
import {NavLayoutsComponent} from "./shared/components/layouts/nav-layouts/nav-layouts.component";
import {UserIsLoggedIn} from "./shared/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sessions/signin',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
        data: {title: 'Session'}
      }
    ]
  },
  {
    path: '',
    component: NavLayoutsComponent,
    canActivate: [UserIsLoggedIn],
    children: [
      {
        path: '',
        loadChildren: () => import('./views/navegation/navegation.module').then(m => m.NavegationModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
