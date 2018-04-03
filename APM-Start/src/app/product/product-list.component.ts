import { Component, OnInit } from '@angular/core';
import {MyProduct} from "./products";
import { ProoductService } from './product.service';
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
})

export class ProductListComponent implements OnInit{

    pageTitle: string ='Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';

    filteredProducts : MyProduct[];
    products : MyProduct[] =   []; 

    constructor(private _productService : ProoductService){
        console.log(this.products);
        console.log(this._productService);
        this.products = this._productService.getProducts();
        console.log(this.products);
        console.log(this._productService);
        
    }
    /* private _productService;
    constructor(productService12 : ProductService){
        _productService = productService12;
    } */
    ngOnInit(): void {
       
    }

    onRatingClicked(message : string) : void{
        this.pageTitle = 'Product List : ' + message;

    }

    toggleImage() : void{
        this.showImage = !this.showImage;
         
    }
}
