import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CompItComponent } from './comp-it/comp-it.component';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"\compIt",component:CompItComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
