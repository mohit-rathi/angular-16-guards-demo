import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CanComponentDeactivate } from 'src/app/interfaces/can-component-deactivate.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, CanComponentDeactivate {
  username = new FormControl<string>('john123', [Validators.required]);
  hasUnsavedChanges = false;

  ngOnInit(): void {
    this.username.valueChanges.subscribe(() => {
      this.hasUnsavedChanges = true;
    });
  }

  saveChanges() {
    this.hasUnsavedChanges = false;
  }

  canDeactivate() {
    if (this.hasUnsavedChanges) {
      return confirm('You have unsaved changes. Do you want to leave?');
    }
    return true;
  };
}
