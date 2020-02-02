import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FitnessPageRoutingModule } from './fitness-routing.module';

import { FitnessPage } from './fitness.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FitnessPageRoutingModule,
        ComponentsModule
    ],
  declarations: [FitnessPage]
})
export class FitnessPageModule {}
