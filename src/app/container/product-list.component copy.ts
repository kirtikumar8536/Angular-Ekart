import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list', //app-product-list
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addToCart:number=0;
  
  listOfString:string[]=['mark','steve','john','sarah'];

 


  product = {
    name: 'iPhone',
    price: 999,
    color: 'Matte Black',
    discountedPrice: 780,
    discount:25,
    instock:5,
    image:'/assets/image/iphone.png'
  };
  
  name:string= 'iPhonex';
  price:number= 999;
  color: string='Matte Black';
  discountedPrice:number= 780

  getDiscountPrice(){
    return this.product.price - (this.product.price * this.product.discount/100);
  }

  onNameChange(event:any){
    //this.name='steve';
    this.name=event.target.value;
    console.log(this.name);
  }

  decrementCartValue(){
    if(this.addToCart>0){
      this.addToCart--;
    } 
  }

  incrementCartValue(){
    if(this.addToCart<this.product.instock){
      this.addToCart++;
    }
  }

}
