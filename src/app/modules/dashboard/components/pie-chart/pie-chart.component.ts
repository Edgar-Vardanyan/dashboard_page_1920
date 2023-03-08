import { Component, ViewChild, OnInit, Input } from '@angular/core';
import {
  ApexDataLabels,
  ApexGrid,
  ApexLegend,
  ApexOptions,
  ApexPlotOptions,
  ApexXAxis,
  ApexYAxis,
  ChartComponent,
  ChartType,
} from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  options: ApexOptions;
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive[];
  labels: any;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  legend: any;
  grid: ApexGrid;
  colors: any;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  @Input() chartTitle: string;
  @Input() titleOptions: string;
  @Input() legends: string[];
  @Input() percents: number[];
  @Input() chartType: ChartType;
  public chartOptions: Partial<ChartOptions>;

  ngOnInit(): void {
    this.chartOptions = {
      colors: ['#43BCCD', '#6D32A5'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
        pie: {
          donut: {
            size: '65%',
          },
        },
      },
      series: [...this.percents],
      chart: {
        type: this.chartType,
        width: 450,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        fontFamily: 'Circular, sans-serif',
        fontWeight: 600,
        horizontalAlign: 'center',
        labels: {
          colors: ['#05081D'],
          useSeriesColors: false,
        },
        formatter: function (legendName: string, opts: any) {
          return [
            legendName,
            ' (',
            opts.w.globals.series[opts.seriesIndex],
            ')  ',
          ];
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: -10,
          offsetY: 2,
        },
        position: 'left',
        offsetY: 80,
        fontSize: '13px',
        itemMargin: {
          horizontal: 0,
          vertical: 6,
        },
      },
      labels: [this.legends[0], this.legends[1]],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'left',
            },
          },
        },
      ],
    };
  }

  constructor() {}
}
