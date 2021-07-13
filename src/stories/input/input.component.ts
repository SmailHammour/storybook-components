import {Component, Input, OnInit} from '@angular/core';
import {FormControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input()
  public validators: ValidatorFn[] = [];

  public emailFormControl!: FormControl

  public ngOnInit(): void {
    console.log(this.validators);
    this.emailFormControl = new FormControl('', this.validators);
  }

  /*
  *     this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  * */
}
