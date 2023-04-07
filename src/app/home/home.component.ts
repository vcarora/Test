import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../model/product';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  productList : product[] =[] 
  products : product[] =[]

  search : string =''

  to : number =10
  from : number =0
  total : number = 0

    constructor(private product :ProductService, private route : RouteService){  }

  ngOnInit(){
    this.product.getProducts().subscribe({
      next: data=>{
        console.log(data)
        this.total = data.length
        this.productList =data
        this.products = this.productList.slice(this.from,this.to)
      },error : err=>{
        alert("Error in fething the products list. Please try again in sometime")
      }
    })

  }

 
  next(){
    let pending = this.total - this.to
    if(pending>0){
      
      this.from +=10
      if(pending >=10){
        this.to += 10  
      }else
      this.to +=pending

    }
   
   
    this.products = this.productList.slice(this.from,this.to)
  }

  previous(){
   
    if(this.from>10){
      this.from -=10
      let pending = this.total - this.to
      if(pending >10){
        this.to -= 10
      }else{
        let a = Math.floor(this.to/10)
        this.to -= a

      }
          
    }
  
    this.products = this.productList.slice(this.from,this.to)


  }



  productdetail(productId: number){
    console.log(productId)
    this.route.toContent(productId)
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
