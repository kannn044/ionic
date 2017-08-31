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
  async getPerson(){
    const token = localStorage.getItem('token')
    const url = `http://192.168.100.116:3000/api/person?token=${token}`
    const resp = await this.http.get(url).toPromise()
    return resp.json() 
  }
  async savePerson(name: string,lname: string,sex: string,tarea: string){
    const token = localStorage.getItem('token')
    const url = `http://192.168.100.116:3000/api/person?token=${token}`
    const resp = await this.http.post(url, {
      name: name,
      lname: lname,
      sex: sex,
      tarea: tarea
    }).toPromise()
    return resp.json() 
  }
  async search(query: string){
    const token = localStorage.getItem('token')
    const url = `http://192.168.100.116:3000/api/person/search?query=${query}&token=${token}`
    const resp = await this.http.get(url).toPromise()
    return resp.json() 
  }
}