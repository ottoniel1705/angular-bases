import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <h1>{{counter}}</h1>

            <button (click)="aumentar(1)">+1</button>
            <button (click)="reset()">Restablecer</button>
            <button (click)="aumentar(-1)">-1</button>
  `
})

export class CounterComponent {

  public counter:number = 10;

  aumentar(value:number){
    this.counter+=value;
  }

  reset(){
    this.counter=10;
  }

}
