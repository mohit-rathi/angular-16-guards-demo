import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { BackofficeComponent } from './backoffice/backoffice.component';
import { AuditComponent } from './audit/audit.component';
import { DataMaintenanceComponent } from './data-maintenance/data-maintenance.component';
import { ConfigurationsComponent } from './configurations/configurations.component';

@NgModule({
  declarations: [
    BackofficeComponent,
    AuditComponent,
    DataMaintenanceComponent,
    ConfigurationsComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
