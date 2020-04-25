import { Component, OnInit } from '@angular/core';
import { Plan } from '../model/plan.model';

@Component({
  selector: 'app-myplan',
  templateUrl: './myplan.component.html',
  styleUrls: ['./myplan.component.scss'],
})
export class MyplanComponent implements OnInit {
  plan: Plan;

  constructor() {}

  ngOnInit(): void {}
}
