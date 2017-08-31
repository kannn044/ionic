import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AvatarProvider } from '../../providers/avatar/avatar';

@IonicPage()
@Component({
  selector: 'page-add-person',
  templateUrl: 'add-person.html',
})
export class AddPersonPage {

  name: string
  lname: string
  sex: string
  tarea: string

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private avatarProvider: AvatarProvider,
    private loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPersonPage');
  }

  async save() {
    const loading = this.loadingCtrl.create({
      content: 'กำลังบันทึก...'
    })
    try {
      loading.present()
      const resp = await this.avatarProvider.savePerson(
        this.name,
        this.lname,
        this.sex,
        this.tarea
      )
      loading.dismiss()
      if (resp.ok) {
        this.navCtrl.pop()
      } else {
        alert(resp.error)
      }

    } catch (error) {
      alert(error.message)
      loading.dismiss()
    }
  }
}
