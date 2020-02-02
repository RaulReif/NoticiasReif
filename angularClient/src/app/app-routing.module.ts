import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsListComponent} from './components/views-list/news-list.component';
import {NewsFormComponent} from './components/views-form/news-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    component: NewsListComponent
  },
  {
    path: 'news/add',
    component: NewsFormComponent
  },
  {
    path: 'news/edit/:id',
    component: NewsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
