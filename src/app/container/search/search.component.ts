import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchText: string ='';

 

  //1. create an event
  // bind this for there parent
@Output()
searchedTextChanged:EventEmitter<string> = new EventEmitter<string>();

onsearchedChanged(){

  this.searchedTextChanged.emit(this.searchText);
}

updateSearchText(inputEle: HTMLInputElement){ //(event:InputEvent)
  console.log(inputEle.value);
  this.searchText = inputEle.value;
  this.searchedTextChanged.emit(this.searchText);
  }

}

//'string' is a primitive, but 'String' is a wrapper object.