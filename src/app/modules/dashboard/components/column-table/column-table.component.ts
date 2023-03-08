import { Component, ViewChild, OnInit, Input } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexXAxis,
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-column-table',
  templateUrl: './column-table.component.html',
  styleUrls: ['./column-table.component.scss'],
})
export class ColumnTableComponent implements OnInit {
  @Input('chartTitle') chartTitle: string;
  @Input('titleOptions') titleOptions: string[];
  @Input('data') data: any[];
  @Input('threeLines') threeLines: boolean;
  @Input('categories') categories: string[];
  @Input('distributed') distributed: boolean;
  @Input('barWidth') barWidth: string;
  @Input('legendState') legendState: boolean;
  @Input('legends') legends: string[];
  @Input('barColors') barColors: string[];
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  ngOnInit(): void {
    this.chartOptions = {
      series: [...this.data],
      yaxis: {
        min: 0,
        max: 6,
        tickAmount: 3,
        floating: false,
      },
      stroke: {
        colors: ['transparent'],
        width: 10,
      },
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: 'bar',
      },
      colors: this.barColors,
      plotOptions: {
        bar: {
          columnWidth: this.barWidth,
          distributed: this.distributed,
          borderRadius: 13,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: this.legendState,
        position: 'top',
        offsetY: 0,
        offsetX: 250,
        fontWeight: 600,
        markers: {
          radius: 50,
          offsetX: -20,
        },
        itemMargin: {
          horizontal: 30,
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        categories: [
          ['Tasks'],
          ['Knowledge Transfer'],
          ['Production Parallel'],
          ['Live Execution'],
          ['Completed'],
        ],
        labels: {
          style: {
            colors: ['#A3A6B9', '#A3A6B9', '#A3A6B9', '#A3A6B9', '#A3A6B9'],
            fontSize: '12px',
            cssClass: 'chart-categories',
          },
        },
      },
    };
  }

  constructor() {}
}
