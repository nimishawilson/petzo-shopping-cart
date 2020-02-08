import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subcategories/:catname', component: SubcategoriesComponent },
  { path: 'products/:category/:subcatcode', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
