import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  submitted = false;
  questionnaireForm: FormGroup;
  constructor() {}

  ngOnInit(): void {}

  submitQuestionnaire() {}
}
