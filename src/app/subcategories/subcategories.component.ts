import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss']
})
export class SubcategoriesComponent implements OnInit {
   subCategories = [ 
    { catName: 'cat', subCat: 'cat food'} ,
    { catName: 'cat', subCat: 'adoption'},
    { catName: 'cat', subCat: 'toys'},
    { catName: 'dog', subCat: 'dog food'},
    { catName: 'dog', subCat: 'adoption'},
    { catName: 'dog', subCat: 'toys'}
  ];
  

  constructor() { }

  ngOnInit() {
  
  }

}
