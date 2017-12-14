import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ItemSummaryPage } from '../item-summary/item-summary';

/**
 * Generated class for the ChooseItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-item',
  templateUrl: 'choose-item.html',
})
export class ChooseItemPage {
  choosenForm: { name: any; };
  items: Array < any >;
  checkedItems : boolean[]
  submitChoosenTreatment : Array < any > = []
  @ViewChild('mySlider')slider : Slides;
  selectedSegment : string
  slides : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.selectedSegment = 'first';
    this.slides = [
      {
        id: "first",
        title: "First Slide"
      }, { 
        id: "second",
        title: "Second Slide"
      }
    ];

    this.items = [
      {
        name: 'Twisties Carbonara',
        name1:'200 point',
        price: "Rm2",
       
      }, {
        name: 'Roti Gardenia',
        name1:'500 point',
        price: "Rm2",
       
      }, {
        name: 'Biskkut Oreo',
        name1:'400 point',
        price: "Rm2",
       
      }, {
        name: 'CEmpedak Goreng Asli',
        name1:'300 point',
        price: "Rm2",
        
      }
    ];
  


    this.checkedItems = new Array(this.items.length)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseItemPage');
  }

  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.slides.findIndex((slide) => {
        return slide.id === segmentButton.value;
      });
    this.slider.slideTo(selectedIndex);
  }

  onSlideChanged(slider) {
    console.log('Slide changed');
    const currentSlide = this.slides[slider.getActiveIndex()];
    this.selectedSegment = currentSlide.id;
  }

  chooseItem(status,itemName){

    if (status == true) {
      this.choosenForm = {
        name:itemName
      }
      this.submitChoosenTreatment.push(this.choosenForm)
      console.log(this.submitChoosenTreatment)  
      } else {
      this.choosenForm = {
        name:itemName
      }
      this.submitChoosenTreatment = this.submitChoosenTreatment.filter(p => {
          return p.name != this.choosenForm.name
      })
      console.log("submit", this.submitChoosenTreatment)
    }

  }

  proceed(){
    this.navCtrl.push(ItemSummaryPage)
  }

}
