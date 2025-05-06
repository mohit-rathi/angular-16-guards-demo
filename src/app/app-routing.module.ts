import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { productDetailResolver, ProductDetailResolver } from './resolvers/product-detail.resolver';
import { ProfileComponent } from './components/profile/profile.component';
import { canDeactivateGuard, CanDeactivateGuard } from './guards/can-deactivate.guard';
import { authGuard, AuthGuard } from './guards/auth.guard';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { StaticComponent } from './components/static/static.component';
import { FeatureV1Component } from './components/feature-v1/feature-v1.component';
import { FeatureV2Component } from './components/feature-v2/feature-v2.component';
import { FeatureService } from './services/feature.service';
import { featureGuard } from './guards/feature.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivateChild: [AuthGuard],
    canActivateChild: [authGuard],
    children: [
      {
        path: 'wishlist',
        component: WishlistComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    // canActivate: [authGuard],
    canDeactivate: [CanDeactivateGuard],
    // canDeactivate: [canDeactivateGuard],
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    // canActivate: [authGuard],
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    canActivate: [AuthGuard],
    // canActivate: [authGuard],
    resolve: { product: ProductDetailResolver },
    // resolve: { product: productDetailResolver },
  },
  {
    path: 'static',
    component: StaticComponent,
    data: { title: 'Static Page', description: 'This is a static page', featureId: 1, requiredPermissions: ['READ', 'WRITE'] },
  },
  {
    path: 'backoffice',
    // canActivate: [AuthGuard],
    // canLoad: [AuthGuard],
    canMatch: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'feature',
    // canActivate: [() => inject(FeatureService).getVersion() === 1],
    // canMatch: [() => inject(FeatureService).getVersion() === 1],
    canMatch: [featureGuard(1)],
    component: FeatureV1Component,
  },
  {
    path: 'feature',
    // canActivate: [() => inject(FeatureService).getVersion() === 2],
    // canMatch: [() => inject(FeatureService).getVersion() === 2],
    canMatch: [featureGuard(2)],
    component: FeatureV2Component,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
