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

  //  the GoalDataService is what the function is returning 
  addGoal(goal: Goal): GoalDataService {

    if (!goal.id) {
      goal.id = ++this.counter
    }
    console.log('Goal service', goal)
    this.goals.push(goal)
    console.log('Goals', this.goals)
    return this
  }

  getAllGoals(): Goal[] {
    return this.goals
  }

  toggleGoalPriority(goal: Goal) {
    let newGoal = this.updateGoalById(goal.id, {
      priority: !goal.priority
    })
    return newGoal
  }

  getGoalById(id: number) : Goal {
    return this.goals.filter(goal => goal.id === id).pop()
  }

  updateGoalById(id: number, values: Object = {} ): Goal {
    let curGoal = this.getGoalById(id)
    if (!curGoal) return null
    Object.assign(curGoal, values)
    return curGoal
  }
}
