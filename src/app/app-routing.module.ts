import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessTokenGuard } from '@app/access-token.guard';

const routes: Routes = [
  {
    path: 'lazy',
    canLoad: [AccessTokenGuard],
    loadChildren: () => import('./lazy/lazy.module').then((m) => m.LazyModule),
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AccessTokenGuard],
})
export class AppRoutingModule {}
