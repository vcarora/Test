import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DescriptionComponent } from './description/description.component';
import { ContentComponent } from './content/content.component';



const routes: Routes = [
  {path : '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home',component: HomeComponent},
  {path: 'description/:id', component: DescriptionComponent},
  {path: 'content/:id', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
