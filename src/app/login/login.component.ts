import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private form : FormBuilder, private loginService : LoginService, private route :RouteService){}

  loginDetails = this.form.group({

    email : ['',Validators.required],
    password : ['', Validators.required,Validators.minLength(2)]
  })

  get email(){return this.loginDetails.get('email')}
  get password(){ return this.loginDetails.get('password')}

  login(){
    console.log(this.loginDetails.value)
    this.loginService.login(this.loginDetails.value.email,this.loginDetails.value.password).subscribe({
      next: data =>{
        console.log(data.length)
        if(data.length>0)
          this.route.toHome()
        else
        alert("No user Present with given credentials")

      },error :err=>{
        alert("Error while Logging In. Please try again in sometime")
      }
      
    })
  }
}
