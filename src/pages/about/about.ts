import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChooseItemPage } from '../choose-item/choose-item';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 shops : any[]
  constructor(public navCtrl: NavController) {

    this.shops = [
      {
        name: 'Wan Kalsom Sdn Bhd',
        address: "Cyberjaya",
       
      }, {
        name: 'Jamek Neo Cyber',
        address: "Cyberjaya",
       
      }, {
        name: 'Speedmart Neo Cyber ',
        address: "Cyberjaya",
       
      }, {
        name: 'Mee Tarik Warisan Asli',
        address: "Cyberjaya",
        
      }
    ];

  }

  showShop(){
    this.navCtrl.push(ChooseItemPage)
  }

  

}
