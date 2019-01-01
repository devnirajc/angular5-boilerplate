import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent, SignupComponent, NotFoundComponent, LoaderComponent } from './components';

import { AuthGuardService, LoaderService, JwtTokenService, HttpInterceptorService, AppConfigService } from './services';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [LoginComponent, SignupComponent, NotFoundComponent, LoaderComponent],
  providers: [AuthGuardService, LoaderService, JwtTokenService, HttpInterceptorService, AppConfigService]
})
export class CoreModule { }
