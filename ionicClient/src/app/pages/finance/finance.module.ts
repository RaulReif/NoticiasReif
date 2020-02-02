import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinancePageRoutingModule } from './finance-routing.module';

import { FinancePage } from './finance.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FinancePageRoutingModule,
        ComponentsModule
    ],
  declarations: [FinancePage]
})
export class FinancePageModule {}
