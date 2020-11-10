import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
 
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { }
 products:Product[];
 title = "Ürünler";
 filterText = "a" ;
 
 ngOnInit(){
  this.activatedRoute.params.subscribe(params => {
    this.productService.getProduct(params["categoryId"]).subscribe(data=>{
      this.products=data
    });
  })

 
}

}
