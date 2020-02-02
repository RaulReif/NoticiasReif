import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {IonicModule} from '@ionic/angular';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {CardsComponent} from './cards/cards.component';



@NgModule({
  declarations: [
      HeaderComponent,
      MenuComponent,
      CardsComponent
  ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ],
  exports: [
      HeaderComponent,
      MenuComponent,
      CardsComponent
  ]
})
export class ComponentsModule { }
