import { Directive, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnInit {
  constructor(private route: ActivatedRoute, private el: ElementRef) {}

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   const id = params['id'];
    let id = this.route.snapshot.paramMap.get("id")
      console.log(id)
      if (id) {
        // const element = this.el.nativeElement.querySelector(`#${id}`);
        const element = document.getElementById(id);
        
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          
        }
      }

}
}

