import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplements',
  templateUrl: './supplements.component.html',
  styleUrls: ['./supplements.component.scss'],
})
export class SupplementsComponent implements OnInit {
  submitted = false;
  supplementForm: FormGroup;
  SupplementCategory: any = [
    'Amino Acid',
    'Vitamin',
    'Mineral',
    'Nootropic',
    'Herbal',
  ];

  Supplement: any = [];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.mainForm();
  }

  ngOnInit(): void {}

  mainForm() {
    this.supplementForm = this.fb.group({
      name: [''],
      description: [''],
      category: [''],
      purchaseUrl: [''],
    });
  }

  updateSupplementCategory(e) {
    this.supplementForm.get('category').setValue(e, {
      onlySelf: true,
    });
  }

  get myForm() {
    return this.supplementForm.controls;
  }

  onSubmit() {}
}
