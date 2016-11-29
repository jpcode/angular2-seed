import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RouterModule } from '@angular/router';
import { Page2 } from './page2.component';
import { MaskPipe } from './mask.pipe';
import { LetterButtonsComponent } from './letter-buttons.component'
import { HighlightDirective } from './highlight.directive';

export const routes = [
  { path: '', component: Page2, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  declarations: [ 
	  Page2, 
	  MaskPipe, 
	  LetterButtonsComponent,
	  HighlightDirective 
  ]
})
export default class Page2Module {
  static routes = routes;
}
