import { inject, Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailResolver implements Resolve<Product | undefined> {
  constructor(private readonly productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<Product | undefined>
    | Promise<Product | undefined>
    | Product
    | undefined {
    const productId = route.paramMap.get('id');
    return this.productService.getProductById(+productId!);
  }
}

export const productDetailResolver: ResolveFn<Product | undefined> = (
  route,
  state
) => {
  const productService = inject(ProductService);

  const productId = route.paramMap.get('id');
  return productService.getProductById(+productId!);
};
