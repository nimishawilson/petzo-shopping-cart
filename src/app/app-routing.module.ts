import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';


const routes: Routes = [
   { path: '', component: HomeComponent },
  { path: 'subcategories', component: SubcategoriesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
