import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  versions = signal<number[]>([1, 2]);
  currentVersion = signal<number>(1);

  getVersion() {
    return this.currentVersion();
  }

  setVersion(version: number) {
    this.currentVersion.set(version);
  }
}
