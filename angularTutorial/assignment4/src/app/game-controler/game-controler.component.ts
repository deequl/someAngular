import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-controler',
  templateUrl: './game-controler.component.html',
  styleUrls: ['./game-controler.component.sass']
})
export class GameControlerComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
  this.interval = setInterval(() => {
    this.intervalFired.emit(this.lastNumber);
    this.lastNumber++;
  }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
