import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalculatorComponent {

  constructor() { }
  gridsize: number = 0;
  gridsize2: number = 0;
  
  selected = 'option2';
  updateSetting(event:any) {
    this.gridsize = event.value;
  }
  updateSetting2(event:any) {
    this.gridsize2 = event.value;
  }
}
