import { inject, Injectable } from '@angular/core';
import { CanMatch, CanMatchFn, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FeatureService } from '../services/feature.service';

export const featureGuard = (version: number) => {
  const featureGuardFn: CanMatchFn = (route, segments) => {
    console.log('ROUTE: ', route);
    console.log('SEGMENTS: ', segments);
    const featureService = inject(FeatureService);
    return featureService.getVersion() === version;
  }

  return featureGuardFn;
};
