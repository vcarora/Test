import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private route : Router) { }

  toHome(){
    this.route.navigate(['home'])
  }

  toDescription(id: number){
    this.route.navigateByUrl('/description/'+id)
  }
  toContent(id: number){
    this.route.navigateByUrl('/content/'+id)
  }
}
