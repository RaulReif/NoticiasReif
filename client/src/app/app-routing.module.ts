import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewsListComponent} from './components/views-list/views-list.component';
import {ViewsFormComponent} from './components/views-form/views-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/views',
    pathMatch: 'full'
  },
  {
    path: 'views',
    component: ViewsListComponent
  },
  {
    path: 'views/add',
    component: ViewsFormComponent
  },
  {
    path: 'views/edit/:id',
    component: ViewsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
