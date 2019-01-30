import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick(){
    return console.log('all app has access to this method when its import')
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
}
