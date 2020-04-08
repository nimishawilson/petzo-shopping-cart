import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public productsfiltered = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    let subCategoryCode = this.route.snapshot.params['subcatcode'];
    console.log("sub cat code is: " + subCategoryCode);

    var allproducts = [
      { category: 'cat', subCat: 'cat food', productname: 'meow mix', subCatcode: 1, imgPath: "../../assets/images/meowmix.jpg", price: '100', desc: 'fuhsuf suhfushdf asf sudhfusdf usfsud jjjasdj nnkd fk sud jjjasdj nnkd fk sud jjjasdj nnkd fk sud jjjasdj nnkd fk sud jjjasdj nnkd fksdfsd ksfs kite cf skf  wat s the all the main sf sf dfsf so thsat  sdfk ssoft soft mostly by the evedkf fhsf  suhfus' },
      { category: 'cat', subCat: 'cat food', productname: 'purffect bistro', subCatcode: 1, imgPath: "../../assets/images/purffect_bistro.jpg", price: '300', desc: 'fuhsuf suhfushdf asf sudhfusdf usfsud jjjasdj nnkd fksdfsd ksfs kite cf skf  wat s the all the main sf sf dfsf so thsat  sdfk ssoft soft mostly by the evedkf fhsf  suhfus' },
      { category: 'cat', subCat: 'adoption', productname: 'persian cat', subCatcode: 2, imgPath: "../../assets/images/persiancat.jpeg", price: '20000', desc: 'kfs a kdfsdf ksd f skfksfasdf sdkfsf sdj' },
      { category: 'cat', subCat: 'adoption', productname: 'persian cat', subCatcode: 2, imgPath: "../../assets/images/persianc.jpeg", price: '18000', desc: 'kfs a kdfsdf ksd f skfksfasdf sdkfsf sdj' },
      { category: 'cat', subCat: 'toys', productname: 'Electric Moving Butterfly', subCatcode: 3, imgPath: "../../assets/images/cattoys.jpg", price: '1200', desc: 'kfs a kdfsdf ksd f skfksfasdf sdkfsf sdj' },
      { category: 'dog', subCat: 'dog food', productname: 'Pedigree', subCatcode: 4, imgPath: "../../assets/images/pedigree.jpg", price: '400', desc: 'kfs a kdfsdf ksd f skfksfasdf sdkfsf sdj' },
      { category: 'dog', subCat: 'adoption', productname: 'white pomeranian', subCatcode: 5, imgPath: "../../assets/images/pom.jpeg", price: '9000', desc: 'kfs a kdfsdf ksd f skfksfasdf sdkfsf sdj' },
    ];
    this.productsfiltered = allproducts.filter(function (sub) {
      return sub.subCatcode == subCategoryCode;
    });

  }

}
