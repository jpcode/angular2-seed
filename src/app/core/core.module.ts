import { CommonModule } from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';

import { CustomErrorHandler } from './core/core.error-handler'

@NgModule({
  providers: [
    {
      provide: ErrorHandler, useClass : CustomErrorHandler 
    }
  ],
  declarations: [
    
  ],
  imports: [
    CommonModule  ]
})
export default class CoreModule {
 
}
