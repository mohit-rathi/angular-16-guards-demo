import { Component, inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FeatureService } from 'src/app/services/feature.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly featureService = inject(FeatureService);

  version = new FormControl<number>(1, Validators.required);

  navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Login', path: '/login' },
    { label: 'Profile', path: '/profile' },
    { label: 'Products', path: '/products' },
    { label: 'Static', path: '/static' },
    { label: 'Backoffice', path: '/backoffice' },
    { label: 'Feature', path: '/feature' },
  ];

  ngOnInit(): void {
    const version = this.featureService.getVersion();
    this.version.setValue(version);

    this.version.valueChanges.subscribe((value) => {
      this.featureService.setVersion(+value!);
    });
  }

  logout() {
    this.authService.logout();
  }
}
