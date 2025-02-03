import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product', 
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // where ever we are using app-product selector there we can use this product as attribute
// not all object in products array has discount price.Only few of them has discount price that's why it is optional
  @Input()
product :{id:number,name:string,
  description:string,
  brand:string,
  gender:String,
  category:string,
  size:number[],
  color:string[],
  price:number,
  discountPrice?:number,
  is_in_inventory:boolean,
  imageURL:string
}; // after decorating now we can use this property in template // but how to get data from parent

}
