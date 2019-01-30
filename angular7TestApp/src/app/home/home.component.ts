import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;

  users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    /*
    * The .subscribe() function is similar to the .then() function in jQuery, but instead of dealing 
    * with promises it deals with Observables.
    */
    this.data.getUsers().subscribe(data => {
      //object we have define above
      this.users = data;
      console.log(this.users);
    })
  }

  firstClick(){
    this.h1Style = true;
    console.log('clicked');
    this.data.firstClick();
  }

}
