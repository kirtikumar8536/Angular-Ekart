import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
  // updateSearchText(event:any){ //(event:InputEvent)
    
  //   this.searchText = event.target.value;
  //   console.log(event);
  // }

  //1. create an event
  // bind this for there parent
@Output()
searchedTextChanged:EventEmitter<string> = new EventEmitter<string>();

onsearchedChanged(){
  this.searchedTextChanged.emit(this.searchText);
}

}

//'string' is a primitive, but 'String' is a wrapper object.