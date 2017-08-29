import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AvatarProvider {

  constructor(public http: Http) {
    console.log('Hello AvatarProvider Provider');
  }
  async getAvatars(){
    const resp = await this.http.get('https://randomuser.me/api/?results=10').toPromise()
    return resp.json() 
  }
}