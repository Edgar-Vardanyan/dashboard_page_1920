import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialModule } from '../../shared/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { RadialLineComponent } from './components/radial-line/radial-line.component';
import { ColumnTableComponent } from './components/column-table/column-table.component';
import { ColumnRadialComponent } from './components/column-radial/column-radial.component';
import { TaskApprovalRateComponent } from './components/task-approval-rate/task-approval-rate.component';
import { RecentTasksReviewComponent } from './components/recent-tasks-review/recent-tasks-review.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    TaskAddComponent,
    PieChartComponent,
    ExpansionComponent,
    DashboardComponent,
    LineChartComponent,
    RadialLineComponent,
    ColumnTableComponent,
    ColumnRadialComponent,
    TaskApprovalRateComponent,
    RecentTasksReviewComponent,
  ],
  imports: [
    SwiperModule,
    CommonModule,
    MaterialModule,
    NgApexchartsModule,
    DashboardRoutingModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
