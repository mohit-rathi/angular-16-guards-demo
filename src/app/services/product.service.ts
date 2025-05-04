import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { Product } from '../models/product.model';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    imageUrl: 'https://picsum.photos/seed/headphones/300/200'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 149.99,
    description: 'Stay connected and track your health with this sleek smart watch.',
    imageUrl: 'https://picsum.photos/seed/smartwatch/300/200'
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 49.99,
    description: 'Portable speaker with powerful sound and long battery life.',
    imageUrl: 'https://picsum.photos/seed/speaker/300/200'
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: 39.99,
    description: 'Ergonomic gaming mouse with customizable buttons and RGB lighting.',
    imageUrl: 'https://picsum.photos/seed/mouse/300/200'
  },
  {
    id: 5,
    name: '4K Monitor',
    price: 299.99,
    description: 'Ultra HD monitor for an immersive viewing and gaming experience.',
    imageUrl: 'https://picsum.photos/seed/monitor/300/200'
  },
  {
    id: 6,
    name: 'Mechanical Keyboard',
    price: 89.99,
    description: 'Tactile mechanical keyboard designed for typing and gaming.',
    imageUrl: 'https://picsum.photos/seed/keyboard/300/200'
  },
  {
    id: 7,
    name: 'External SSD',
    price: 119.99,
    description: 'High-speed external SSD for fast data transfer and backup.',
    imageUrl: 'https://picsum.photos/seed/ssd/300/200'
  },
  {
    id: 8,
    name: 'Drone with Camera',
    price: 499.99,
    description: 'Capture stunning aerial photos and videos with this HD camera drone.',
    imageUrl: 'https://picsum.photos/seed/drone/300/200'
  }
];

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts() {
    return of(PRODUCTS);
  }

  getProductById(id: number) {
    const product = PRODUCTS.find((product) => product.id == id);
    return of(product).pipe(delay(2000));
  }
}
