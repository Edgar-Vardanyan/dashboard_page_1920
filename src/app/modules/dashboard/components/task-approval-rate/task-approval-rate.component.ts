import { Component, ViewChild, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexGrid,
  ApexStroke,
} from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  responsive: any[];
  chart: any;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: any;
  grid: ApexGrid;
  colors: string[];
  legend: any;
  labels: any;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-task-approval-rate',
  templateUrl: './task-approval-rate.component.html',
  styleUrls: ['./task-approval-rate.component.scss'],
})
export class TaskApprovalRateComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: 'Reviewed Tasks',
          data: [
            {
              x: 'Reviewed Tasks',
              y: 26,
              fillColor: '#43BCCD',
            },
            {
              x: 'Not Reviewed Tasks',
              y: 18,
              fillColor: '#6D32A5',
            },
          ],
        },
      ],

      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + '%';
        },
        offsetY: -40,
        style: {
          fontSize: '13px',
          colors: ['#05081D'],
        },
      },
      chart: {
        toolbar: {
          show: false,
          tools: {
            zoom: false
        }
        },
        height: 300,
        type: 'bar',
      },
      colors: ['#43BCCD', '#6D32A5'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
          borderRadius: 13,
          dataLabels: {
            position: 'top',
            maxItems: 100,
            hideOverflowingLabels: true,
            orientation: 'horizontal',
          },
        },
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
            opts.w.globals.series[0][opts.seriesIndex],
            ')  ',
          ];
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: '#fff',
          radius: 12,
          offsetX: -10,
          offsetY: 2,
        },
        position: 'left',
        offsetY: 60,
        offsetX: 0,
        fontSize: '13px',
        itemMargin: {
          horizontal: 0,
          vertical: 34,
        },
      },
      labels: ['Reviewed Tasks', 'Not Reviewed Tasks'],
      grid: {
        show: false,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 50,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        show: false,
      },
    };
  }
}
