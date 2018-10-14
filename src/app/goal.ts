export class Goal {
  id: number;
  description: string;
  date: number = Date.now();
  priority: boolean = false;

  constructor(values: Object = {}) {
    Object.assign( this, values)
  }
}
