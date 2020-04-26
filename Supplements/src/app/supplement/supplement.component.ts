import { Component, OnInit } from '@angular/core';
import { Supplement } from '../model/supplement';
import { ActivatedRoute } from '@angular/router';

import { SupplementService } from '../supplement.service';

@Component({
  selector: 'app-supplement',
  templateUrl: './supplement.component.html',
  styleUrls: ['./supplement.component.scss'],
})
export class SupplementComponent implements OnInit {
  Supplement: Supplement;
  suppName = '';
  suppDesc = '';
  suppCat = '';
  suppUrl = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private supplementService: SupplementService
  ) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.supplementService.getSupplement(id).subscribe((res) => {
      this.Supplement = res;
      this.suppName = this.Supplement.name;
      this.suppDesc = this.Supplement.description;
      this.suppCat = this.Supplement.category;
      this.suppUrl = this.Supplement.purchaseUrl;
    });
  }

  ngOnInit(): void {}
}
