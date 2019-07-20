import {Component} from '@angular/core';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'card-fancy-example',
  templateUrl: 'card-fancy-example.html',
  styleUrls: ['card-fancy-example.css'],
})
export class CardFancyExample {
  public noi = 2;
  public propVal = 5;
  public caprate = this.noi/this.propVal
}