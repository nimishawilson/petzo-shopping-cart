import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss']
})
export class SubcategoriesComponent implements OnInit {
  public subCategoriesfiltered = [];
  public categoryName;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    let categoryNameParam = this.route.snapshot.params['catname'];

    var categorySubcategory = [
      { catName: 'cat', subCat: 'cat food', subCatcode: 1, imgPath: "../../assets/images/cat.png" },
      { catName: 'cat', subCat: 'adoption', subCatcode: 2, imgPath: "../../assets/images/cat.png" },
      { catName: 'cat', subCat: 'toys', subCatcode: 3, imgPath: "../../assets/images/cat.png" },
      { catName: 'dog', subCat: 'dog food', subCatcode: 4, imgPath: "../../assets/images/dog.png" },
      { catName: 'dog', subCat: 'adoption', subCatcode: 5, imgPath: "../../assets/images/dog.png" },
      { catName: 'dog', subCat: 'toys', subCatcode: 6, imgPath: "../../assets/images/dog.png" }
    ];
    // refer filtering array objects  https://alligator.io/js/filter-array-method/ 
    this.subCategoriesfiltered = categorySubcategory.filter(function (sub) {
      return sub.catName == categoryNameParam;
    });
    this.categoryName = categoryNameParam;
  }

}
