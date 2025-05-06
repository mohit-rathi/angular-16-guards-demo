import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditComponent } from './audit/audit.component';
import { DataMaintenanceComponent } from './data-maintenance/data-maintenance.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { BackofficeComponent } from './backoffice/backoffice.component';

const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      {
        path: '',
        redirectTo: 'audit',
        pathMatch: 'full',
      },
      {
        path: 'audit',
        component: AuditComponent,
      },
      {
        path: 'data-maintenance',
        component: DataMaintenanceComponent,
      },
      {
        path: 'configurations',
        component: ConfigurationsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
