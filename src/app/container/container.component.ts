import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'container', //app-product-list
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listOfString:string[]=['mark','steve','john','sarah'];

  
  ctsearchText :string='';

  setSearchText(value:string){
    this.ctsearchText =value; 
  }

}
