import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    @Input()
    goals: Goal[]


    constructor() {}
    ngOnInit() {}

}
