import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

declare var System : any;

export const ROUTES: Routes = [{
    path: '',   loadChildren: () => System.import('./layout/layout.module')
  },{
    path: 'error', component: ErrorComponent
  }, {
    path: '**',    component: ErrorComponent
  }
];
