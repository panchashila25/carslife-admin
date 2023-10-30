import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import {
  LayoutComponent
} from './layouts/layout.component';

// Auth
import {
  AuthGuard
} from './core/guards/auth.guard';
import { Role } from './core/models/role.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    //canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}