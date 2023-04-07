import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../model/product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  productDetail : any = {}
  param : any 

  constructor(private product : ProductService, private route : ActivatedRoute){}

  ngOnInit(){
   this.param =  this.route.snapshot.paramMap.get("id")
    console.log(this.param)
    this.product.getProductDetail(this.param).subscribe({
      next : data=>{
        console.log(data)
        this.productDetail = data

      }
    })
  }

}
