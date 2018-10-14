import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  newGoal: Goal = new Goal();

  @Output()
  add: EventEmitter<Goal> = new EventEmitter();

  addGoal() {
    console.log('Header Component', this.newGoal)
    this.add.emit(this.newGoal);
    this.newGoal = new Goal() 
    // this line created an empty object again 
  }

  constructor() { }
  ngOnInit() {}
}
