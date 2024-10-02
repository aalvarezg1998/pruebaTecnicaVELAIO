import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: async () =>
          (await import('./home/home.module')).HomeModule
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
      path: 'create-task',
      loadChildren: async () =>
        (await import('./task/task.module')).TaskModule
    },
    {
      path: 'list-task',
      loadChildren: async () =>
        (await import('./list-task/list-task.module')).ListTaskModule
    },
    {
      path: 'not-found',
      loadChildren: async () =>
        (await import('./error404/error404.module')).Error404Module
    },
    {
      path: '**',
      redirectTo: 'not-found',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }