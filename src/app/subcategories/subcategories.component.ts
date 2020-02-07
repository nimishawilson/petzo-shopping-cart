import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss']
})
export class SubcategoriesComponent implements OnInit {
 

  public subCategoriesfiltered = [];
  
 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    let categoryNameParam = this.route.snapshot.params['catname'];

    var categorySubcategory = [ 
    { catName: 'cat', subCat: 'cat food', imgPath: "../../assets/images/cat.png"} ,
    { catName: 'cat', subCat: 'adoption', imgPath: "../../assets/images/cat.png"},
    { catName: 'cat', subCat: 'toys', imgPath: "../../assets/images/cat.png"},
    { catName: 'dog', subCat: 'dog food', imgPath: "../../assets/images/dog.png"},
    { catName: 'dog', subCat: 'adoption', imgPath: "../../assets/images/dog.png"},
    { catName: 'dog', subCat: 'toys', imgPath: "../../assets/images/dog.png"}
  ];
    // refer filtering array objects  https://alligator.io/js/filter-array-method/

  this.subCategoriesfiltered = categorySubcategory.filter(function(sub) {
    return sub.catName == categoryNameParam;
  });

  

  }


  

}
