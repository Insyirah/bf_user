import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-summary',
  templateUrl: 'item-summary.html',
})
export class ItemSummaryPage {
  counter: number = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemSummaryPage');
  }

  increment() {
    this.counter += 1;
  
  }

  decrement() {
    this.counter -= 1;
  }

}
