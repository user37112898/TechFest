import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CompItComponent } from './comp-it/comp-it.component';
import { EcEeComponent } from "./ec-ee/ec-ee.component";

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"\compIt",component:CompItComponent},
  {path:"\ecEe",component:EcEeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
