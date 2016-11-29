import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';


export const ROUTES: Routes = [{
    path: '',   loadChildren: () => System.import('./layout/layout.module')
  },{
    path: 'error', component: ErrorComponent
  }, {
    path: '**',    component: ErrorComponent
  }
];
