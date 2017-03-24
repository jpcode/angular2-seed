import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RouterModule } from '@angular/router';
import { Home } from './home.component';

import { FormsModule }   from '@angular/forms';
import { CoderDetailComponent } from './coder/coder-detail.component';

import { HttpModule }    from '@angular/http';

export const routes = [
  { path: '', component: Home, pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpModule
  ],
  declarations: [ Home, CoderDetailComponent ]
})

export default class HomeModule {
  static routes = routes;

}
