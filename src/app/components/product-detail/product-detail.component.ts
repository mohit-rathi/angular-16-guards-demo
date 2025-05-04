import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);

  product: Product | undefined;

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   const productId = params['id'];
    //   this.productService.getProductById(productId).subscribe({
    //     next: (data) => {
    //       this.product = data;
    //       console.log(this.product);
    //     },
    //   });
    // });

    this.route.data.subscribe((data) => {
      this.product = data['product'];
    });
  }
}
