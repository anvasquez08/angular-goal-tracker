import { Injectable } from '@angular/core';
import { Goal } from './goal'

@Injectable({
  providedIn: 'root'
})

export class GoalDataService {
  title: string = "Goal Tracker Application"
  goals: Goal[] = []
  counter: number = 0

  constructor() { }

  // 1) why add GoalDataService 
  addGoal(goal: Goal): GoalDataService {

    if (!goal.id) {
      goal.id = ++this.counter
    }
    console.log('Goal service', goal)
    this.goals.push(goal)
    console.log('Goals', this.goals)
    return this
  }
  // 2) why add Goal []
  getAllGoals(): Goal[] {
    return this.goals
  }
}