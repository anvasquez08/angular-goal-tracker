import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Goal } from '../goal'
@Component({
  selector: 'app-goal-item',
  templateUrl: './goal-item.component.html',
  styleUrls: ['./goal-item.component.css']
})

export class GoalItemComponent implements OnInit {

  @Input()
  goal: Goal

  constructor() {}
  ngOnInit() {}

}
