import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cells = Array(9).fill(null);
  player1 = null;
  player2 = 'X';
  

  constructor(public navCtrl: NavController) {

  }

  get StatusMessage(){
    return this.player2? `${this.player2} won!` : 
    `${this.player1}'s order`;
  }

  wincondition() 
  {
    const winconditions = [
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 4, 8], [2, 4, 6]             
    ];
    for (let condition of winconditions) {
        if ( this.cells[condition[0]]
            && this.cells[condition[0]] === this.cells[condition[1]]
            && this.cells[condition[1]] === this.cells[condition[2]]) {
              return true;
        }
    }
    return false;
  }

  usermove(position) 
  {
    if(!this.player2 && !this.cells[position] ){
      if(this.wincondition()) {
        this.player2 = this.player1;
      }
      this.player1 = this.player1 === 'X' ? 'O' : 'X';
      this.cells[position] = this.player1;
    }
  }

  restartGame() 
  {
    this.cells = Array(9).fill(null);
    this.player1 = 'X';
    this.player2 = null;
  }

}
