import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { AboutPage } from '../about/about';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  qrData = null
  createdCode = null
  scannedCode = null
  
  constructor(private qrScanner: QRScanner,private platform: Platform , public navCtrl: NavController) {
    // this.createCode()
  }

  chooseFoodShop(){
    this.navCtrl.push(AboutPage)
  }

  createCode(){
    this.createdCode = this.qrData
  }

  // scanCodes(){
  //   this.platform.ready().then(() => {
  //     this.barcodescanner.scan().then(barcodeData =>{
  //       this.scannedCode = barcodeData.text
  //     })
  //   });
  // }

//   scanCode(){
//     alert("po")
//     let scanSub = this.qrScanner.scan().subscribe((text: string) => {
//       console.log('Scanned something', text);
//       alert("p")
     
//       scanSub.unsubscribe(); // stop scanning
//     });
// }

scan(){
  this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted


       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });

       // show camera preview
       this.qrScanner.show();

       // wait for user to scan something, then the observable callback will be called

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e));
}
}