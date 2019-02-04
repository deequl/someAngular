import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server created yet!";
  serverName = 'TestServer';
  servers = ['TestServer', 'TestServer2']

  serverCreated = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created!";
  }

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = event.target.value;
    //this.serverName = (<HTMLInputElement>event.target).value;
  }

}
