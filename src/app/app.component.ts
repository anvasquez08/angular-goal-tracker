import { Component } from '@angular/core';
import { GoalDataService } from './goal-data.service'
import { Goal } from './goal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = this.goalDataService.title;

  constructor( private goalDataService: GoalDataService ){
    console.log('curr goals',  this.goalDataService.goals)
  }

  onAddGoal(goal: Goal) {
    console.log('App Component', goal)
    this.goalDataService.addGoal(goal)
  }

  // why get??
  get goals() {
    return this.goalDataService.getAllGoals()
  }
  
}
