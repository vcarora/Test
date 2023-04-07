import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../model/product';
import { RouteService } from '../services/route.service';
import {ScrollDirective} from '../scroll.directive';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  productList : product[] =[] 
  products : product[] =[]

  search : string =''


    constructor(private product :ProductService, private route : RouteService){  }

  ngOnInit(){
    this.product.getProducts().subscribe({
      next: data=>{
        console.log(data)
      
        this.productList =data
        
      },error : err=>{
        alert("Error in fething the products list. Please try again in sometime")
      }
    })

  }

 



  productdetail(productId: number){
    console.log(productId)
    this.route.toDescription(productId)
  }

  searchItem() : void{
    console.log(this.search)
    this.product.getProductByName(this.search).subscribe({
      next :data=>{
        this.products = data
        console.log(data)
      }
    })
  }

}

