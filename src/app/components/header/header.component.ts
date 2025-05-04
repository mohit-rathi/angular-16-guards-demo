import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);

  navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Login', path: '/login' },
    { label: 'Profile', path: '/profile' },
    { label: 'Products', path: '/products' },
  ];

  logout() {
    this.authService.logout();
  }
}
