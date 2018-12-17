import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AboutComponent} from './about/about.component';
import{ContactUsComponent} from './contact-us/contact-us.component';
import{MainComponent} from './main/main.component';
  import { from } from 'rxjs';
const routes: Routes = [

  {path :'about', component:AboutComponent},
  {path :'contact', component:ContactUsComponent},
  {path:'main' , component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
  
 
})
export class AppRoutingModule { }
