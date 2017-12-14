import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseItemPage } from './choose-item';

@NgModule({
  declarations: [
    ChooseItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseItemPage),
  ],
})
export class ChooseItemPageModule {}
