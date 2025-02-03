import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      description: "High-performance running shoes designed for stability and comfort.",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      size: [6, 7, 8, 9, 10],
      color: ["White", "Blue", "Black"],
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://images.puma.net/images/376591/08/sv01/fnd/IND/w/800/h/800/",
      slug: "nike-react-infinity-run-flyknit"
    },
    {
      id: 2,
      name: "Adidas Ultraboost 22",
      description: "The best comfort and energy return for long-distance running.",
      brand: "ADIDAS",
      gender: "WOMEN",
      category: "RUNNING",
      size: [5, 6, 7, 8, 9],
      color: ["Pink", "Black", "Gray"],
      price: 180,
      discountPrice:140,
      is_in_inventory: false,
      items_left: 5,
      imageURL: "https://images.puma.net/images/376591/08/sv01/fnd/IND/w/800/h/800/",
      slug: "adidas-ultraboost-22"
    },
    {
      id: 3,
      name: "Puma Velocity Nitro 2",
      description: "High-performance running shoe for every runner.",
      brand: "PUMA",
      gender: "MEN",
      category: "RUNNING",
      size: [7, 8, 9, 10, 11],
      color: ["Green", "Blue", "Black"],
      price: 140,
      is_in_inventory: false,
      items_left: 2,
      imageURL: "https://images.puma.net/images/376591/08/sv01/fnd/IND/w/800/h/800/",
      slug: "puma-velocity-nitro-2"
    },
    {
      id: 4,
      name: "Under Armour HOVR Sonic 5",
      description: "Provides zero gravity feel with UA HOVR cushioning technology.",
      brand: "UNDER ARMOUR",
      gender: "UNISEX",
      category: "TRAINING",
      size: [6, 7, 8, 9, 10],
      color: ["Black", "Gray"],
      price: 120,
      is_in_inventory: true,
      items_left: 7,
      imageURL: "https://images.puma.net/images/376591/08/sv01/fnd/IND/w/800/h/800/",
      slug: "under-armour-hovr-sonic-5"
    },
    {
      id: 5,
      name: "Reebok Nano X2",
      description: "Perfect for gym workouts and cross-training.",
      brand: "REEBOK",
      gender: "WOMEN",
      category: "CROSSFIT",
      size: [5, 6, 7, 8],
      color: ["White", "Red"],
      price: 130,
      is_in_inventory: true,
      items_left: 6,
      imageURL: "https://images.puma.net/images/376591/08/sv01/fnd/IND/w/800/h/800/",
      slug: "reebok-nano-x2"
    },
    {
      id: 6,
      name: "ASICS Gel-Kayano 28",
      description: "Supports overpronators with advanced stability features.",
      brand: "ASICS",
      gender: "MEN",
      category: "RUNNING",
      size: [8, 9, 10, 11],
      color: ["Blue", "Black"],
      price: 155,
      is_in_inventory: true,
      items_left: 8,
      imageURL: "https://images.puma.net/images/376591/08/sv01/fnd/IND/w/800/h/800/",
      slug: "asics-gel-kayano-28"
    },
    {
      id: 7,
      name: "Brooks Ghost 14",
      description: "Soft cushioning for a smooth, comfortable run.",
      brand: "BROOKS",
      gender: "WOMEN",
      category: "RUNNING",
      size: [6, 7, 8, 9],
      color: ["Purple", "Gray"],
      price: 140,
      is_in_inventory: true,
      items_left: 4,
      imageURL: "https://images.puma.net/images/376591/08/sv01/fnd/IND/w/800/h/800/",
      slug: "brooks-ghost-14"
    },
    {
      id: 8,
      name: "Saucony Endorphin Speed 3",
      description: "Engineered for speed with PWRRUN cushioning.",
      brand: "SAUCONY",
      gender: "UNISEX",
      category: "MARATHON",
      size: [7, 8, 9, 10],
      color: ["Yellow", "Black"],
      price: 170,
      discountPrice:140,
      is_in_inventory: true,
      items_left: 3,
      imageURL: "https://images.puma.net/images/376591/08/sv01/fnd/IND/w/800/h/800/",
      slug: "saucony-endorphin-speed-3"
    },
    {
      id: 9,
      name: "New Balance 990v5",
      description: "Classic design with premium materials.",
      brand: "NEW BALANCE",
      gender: "MEN",
      category: "CASUAL",
      size: [7, 8, 9, 10, 11],
      color: ["Gray", "Navy"],
      price: 185,
      is_in_inventory: false,
      items_left: 9,
      imageURL: "https://images.puma.net/images/376591/08/sv01/fnd/IND/w/800/h/800/",
      slug: "new-balance-990v5"
    },
    {
      id: 10,
      name: "Hoka One One Clifton 8",
      description: "Delivers premium comfort and plush cushioning.",
      brand: "HOKA",
      gender: "WOMEN",
      category: "RUNNING",
      size: [6, 7, 8, 9],
      color: ["White", "Pink"],
      price: 150,
      is_in_inventory: true,
      items_left: 5,
      imageURL: "https://images.puma.net/images/376591/08/sv01/fnd/IND/w/800/h/800/",
      slug: "hoka-one-one-clifton-8"
    },
    {
      id: 11,
      name: "Vans Old Skool",
      description: "Iconic skate shoes with a timeless design.",
      brand: "VANS",
      gender: "UNISEX",
      category: "SKATE",
      size: [6, 7, 8, 9, 10],
      color: ["Black", "White"],
      price: 75,
      is_in_inventory: true,
      discountPrice:60,
      items_left: 12,
      imageURL: "https://images.puma.net/images/376591/08/sv01/fnd/IND/w/800/h/800/",
      slug: "vans-old-skool"
    },
    {
      id: 12,
      name: "Converse Chuck Taylor All Star",
      description: "Classic high-top sneakers loved by everyone.",
      brand: "CONVERSE",
      gender: "UNISEX",
      category: "CASUAL",
      size: [5, 6, 7, 8, 9],
      color: ["Black", "White", "Red"],
      price: 60,
      is_in_inventory: false,
      items_left: 15,
      imageURL: "https://images.puma.net/images/376591/08/sv01/fnd/IND/w/800/h/800/",
      slug: "converse-chuck-taylor-all-star"
    },
    // Continue adding products up to 30
  ];
  totalProductCount=this.products.length;
  totalProductInStock=this.products.filter(
                        p=>p.is_in_inventory===true).length;
  totalProductOutOfStock=this.products.filter(
    p=>p.is_in_inventory===false
  ).length;


  selectedFilterRadioButton :string = 'all';

  onFilterChange(value:string){
    // console.log("current value:"+this.selectedFilterRadioButton);
    console.log("getting emmited value:"+value);
    this.selectedFilterRadioButton = value;
    // now we got the the emmited value so we will filter out the product

  }

  @Input()
  psearchText:string='';



}
