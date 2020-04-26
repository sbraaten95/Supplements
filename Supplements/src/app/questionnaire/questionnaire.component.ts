import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  submitted = false;
  questionnaireForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private resultService: ResultsService
  ) {
    this.mainForm();
  }

  ngOnInit(): void {}

  mainForm() {
    this.questionnaireForm = this.fb.group({
      depression: [],
      anxiety: [],
      sleep: [],
      productivity: [],
      heartHealth: [],
      immuneSystem: [],
      exercise: [],
      memory: [],
    });
  }

  get myForm() {
    return this.questionnaireForm.controls;
  }

  sendResults() {
    this.resultService.depressionResult = new Number(
      this.myForm.depression.value
    );
    this.resultService.anxietyResult = new Number(this.myForm.anxiety.value);
    this.resultService.sleepResult = new Number(this.myForm.sleep.value);
    this.resultService.productivityResult = new Number(
      this.myForm.productivity.value
    );
    this.resultService.heartHealthResult = new Number(
      this.myForm.heartHealth.value
    );
    this.resultService.immuneSystemResult = new Number(
      this.myForm.immuneSystem.value
    );
    this.resultService.exerciseResult = new Number(this.myForm.exercise.value);
    this.resultService.memoryResult = new Number(this.myForm.memory.value);
  }

  onSubmit() {
    this.submitted = true;
    this.ngZone.run(() => {
      this.sendResults();
      this.router.navigateByUrl(`/results`);
    });
  }
}
