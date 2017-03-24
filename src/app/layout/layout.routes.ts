import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
declare var System : any;

const routes: Routes = [
  { path: '', component: Layout, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => System.import('../home/home.module') },
    { path: 'page2', loadChildren: () =>  System.import('../page2/page2.module') }

  ]}
];
export const ROUTES = RouterModule.forChild(routes);
