import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  depressionResult: Number;
  anxietyResult: Number;
  sleepResult: Number;
  productivityResult: Number;
  heartHealthResult: Number;
  immuneSystemResult: Number;
  exerciseResult: Number;
  memoryResult: Number;

  depressionSupplements: [];
  anxietySupplements: [];
  sleepSupplements: [];
  productivitySupplements: [];
  heartHealthSupplements: [];
  immuneSystemSupplements: [];
  exerciseSupplements: [];
  memorySupplements: [];

  constructor(private resultService: ResultsService) {
    this.retrieveResults();
  }

  ngOnInit(): void {
    this.resultService.processResults().subscribe((responseList) => {
      this.depressionSupplements = responseList[0];
      this.anxietySupplements = responseList[1];
      this.sleepSupplements = responseList[2];
      this.productivitySupplements = responseList[3];
      this.heartHealthSupplements = responseList[4];
      this.immuneSystemSupplements = responseList[5];
      this.exerciseSupplements = responseList[6];
      this.memorySupplements = responseList[7];
    });
  }

  retrieveResults() {
    this.depressionResult = this.resultService.depressionResult;
    this.anxietyResult = this.resultService.anxietyResult;
    this.sleepResult = this.resultService.sleepResult;
    this.productivityResult = this.resultService.productivityResult;
    this.heartHealthResult = this.resultService.heartHealthResult;
    this.immuneSystemResult = this.resultService.immuneSystemResult;
    this.exerciseResult = this.resultService.exerciseResult;
    this.memoryResult = this.resultService.memoryResult;
  }
}
