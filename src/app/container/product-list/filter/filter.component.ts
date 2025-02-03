import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //now we get data from parent
  @Input()
  all:number=0;
  @Input()
  instock:number=0;
  @Input()
  outOfStock:number=0;


@Output()
selectedFilterRadioButtonchanged:EventEmitter<string> = new EventEmitter<string>(); //string data will be emmit

selectedFilterRadioButton : string ='all';  // by default

onSelectedFilterRadioButtonChange(){
  // raise event when change happen 
  console.log("raising selectedFilterRadioButtonchanged event...."+ this.selectedFilterRadioButton);
  // how to get selected radio button value -- selectedFilterRadioButton
  this.selectedFilterRadioButtonchanged.emit(this.selectedFilterRadioButton);
}


}
