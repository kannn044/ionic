import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //name='Tan';
  //age = ['<18', '18-25', '26-40', '41-50', '51>'];
  //age= ['1','2','3']
  users = [
    { id: 1, name: 'สมชัย พิทักษ์กุล' ,age:'40'},
    { id: 2, name: 'สมชาย เชิงพงพัฒน์' ,age:'45'},
    { id: 3, name: 'สมควร ใจดี' ,age:'47'}
  ];
  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }
  showme(u:any) {
    let alert = this.alertCtrl.create({
      title: 'กดทำไม',
      subTitle: 'กรุณาปิด',
      message:'hello '+u.name,
      buttons: ['ปิด']
    });
    alert.present();
  }
  detail(u:any){
    this.navCtrl.push(DetailPage,u)
  }
}