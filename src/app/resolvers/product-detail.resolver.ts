import { inject, Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailResolver implements Resolve<Product | UrlTree> {
  constructor(
    private readonly productService: ProductService,
    private readonly router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product | UrlTree> | Promise<Product | UrlTree> | Product | UrlTree {
    const productId = route.paramMap.get('id');
    return this.productService.getProductById(+productId!).pipe(
      map((product) => {
        return product ? product : this.router.parseUrl('/not-found');
      }),
    );
  }
}

export const productDetailResolver: ResolveFn<Product | UrlTree> = (route, state) => {
  const productService = inject(ProductService);
  const router = inject(Router);

  const productId = route.paramMap.get('id');
  return productService.getProductById(+productId!).pipe(
    map((product) => {
      return product ? product : router.parseUrl('/not-found');
    })
  );
};
