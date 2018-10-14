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

  
  constructor() {}
  ngOnInit() {}

}
