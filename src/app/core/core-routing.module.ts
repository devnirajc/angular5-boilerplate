import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LoginComponent,
  NotFoundComponent,
  SignupComponent
} from '@app/core/components/index';

const routes: Routes = [
  {
    path: '',
    loadChildren: '@app/modules/layout/layout.module#LayoutModule'
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'signup',
    component: SignupComponent
  }, {
    path: 'not-found',
    component: NotFoundComponent
  }, {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
