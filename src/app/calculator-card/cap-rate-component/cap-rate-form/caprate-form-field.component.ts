import {Component} from '@angular/core';

/** @title Form field with prefix & suffix */
@Component({
  selector: 'caprate-form-field-component',
  templateUrl: 'caprate-form-field-component.html',
  styleUrls: ['caprate-form-field-component.css'],
})
export class CapRateFormComponent {
  hide = true;
  public noi = 50000;
  public propVal = 1000000;
  public caprate = this.noi/this.propVal
}