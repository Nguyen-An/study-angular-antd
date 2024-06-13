import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'directive', loadChildren: () => import('./pages/directive/directive.module').then(m => m.DirectiveModule) },
  { path: 'component-interaction', loadChildren: () => import('./pages/component-interaction/component-interaction.module').then(m => m.ComponentInteractionModule) },
  { path: 'rxjs', loadChildren: () => import('./pages/RxJS/rxjs.module').then(m => m.RxjsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
