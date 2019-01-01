import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadComponent } from './components';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FileUploadComponent
  ],
  declarations: [
    FileUploadComponent
  ]
})
export class SharedModule { }
