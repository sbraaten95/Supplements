import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SupplementService } from '../supplement.service';

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
    private ngZone: NgZone,
    private supplementService: SupplementService
  ) {
    this.mainForm();
    this.getSupplements();
  }

  ngOnInit(): void {}

  mainForm() {
    this.supplementForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      purchaseUrl: ['', [Validators.required]],
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

  updateSupplementCategory(e) {
    this.supplementForm.get('category').setValue(e, {
      onlySelf: true,
    });
  }

  get myForm() {
    return this.supplementForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.supplementForm.valid) {
      return false;
    } else {
      this.supplementService
        .createSupplement(this.supplementForm.value)
        .subscribe(
          (res) => {
            console.log('supplement successfully created!');
            this.ngZone.run(() => this.router.navigateByUrl('/supplements'));
            this.getSupplements();
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  getSupplements() {
    this.supplementService.getSupplements().subscribe((res) => {
      this.Supplement = res;
    });
  }

  removeSupplement(supp, index) {
    this.supplementService.deleteSupplement(supp._id).subscribe((data) => {
      this.Supplement.splice(index, 1);
    });
    this.getSupplements();
  }
}
