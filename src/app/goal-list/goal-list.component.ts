import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.css']
})
export class GoalListComponent implements OnInit {
  @Input() 
  goals: Goal[];

  @Output()
  togglePriority: EventEmitter<Goal> = new EventEmitter()

  onTogglePriority(goal: Goal) {
    console.log('Goal Item')
    this.togglePriority.emit(goal)
  }
  

  constructor() {}
  ngOnInit() {}

}
