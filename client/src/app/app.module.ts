import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ViewsFormComponent } from './components/views-form/views-form.component';
import { ViewsListComponent } from './components/views-list/views-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ViewsFormComponent,
    ViewsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
