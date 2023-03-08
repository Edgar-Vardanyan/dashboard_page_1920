import { Component, ViewChild, OnInit } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexMarkers,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  yaxis: any;
  legend: ApexLegend;
};
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  ngOnInit() {}

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Average Cycle Time',
          type: 'line',
          data: [8, 9, 18, 10],
          color: '#6D32A5',
        },
        {
          name: 'Agreed TAT',
          type: 'line',
          data: [13, 4, 14, 18],
          color: '#43BCCD',
        },
      ],
      legend: {
        show: true,
        position: 'top',
        offsetY: 8,
        offsetX: -450,
        fontSize: '13px',
        fontWeight: 600,
        labels: {
          colors: '#05081D',
        },
        markers: {
          offsetX: -20,
        },
        itemMargin: {
          horizontal: 36,
        },
      },
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: 'line',
      },
      yaxis: {
        show: true,
        showAlways: true,
        showForNullSeries: true,
        seriesName: undefined,
        opposite: false,
        reversed: false,
        logarithmic: false,
        logBase: 10,
        tickAmount: 3,
        min: 0,
        max: 30,
        forceNiceScale: false,
        floating: false,
        decimalsInFloat: undefined,
        labels: {
          show: true,
          align: 'right',
          minWidth: 0,
          maxWidth: 160,
          style: {
            colors: [],
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
          },
          offsetX: 0,
          offsetY: 0,
          rotate: 0,
          formatter: (value) => {
            return value;
          },
        },
        axisBorder: {
          show: true,
          color: '#78909C',
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#78909C',
          width: 6,
          offsetX: 0,
          offsetY: 0,
        },
        title: {
          text: undefined,
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title',
          },
        },
        crosshairs: {
          show: false,
          position: 'back',
          stroke: {
            color: '#b6b6b6',
            width: 1,
            dashArray: 0,
          },
        },
        tooltip: {
          enabled: false,
          offsetX: 0,
        },
      },
      markers: {
        colors: ['#FFFFFF'],
        size: 10,
        strokeColors: ['#6D32A5', '#43BCCD'],
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: '',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        min: 0.5,
        max: 4.5,
        labels: {
          show: true,
          offsetX: -65,
          offsetY: 0,
          style: {
            colors: '#A3A6B9',
            cssClass: 'chart-categories',
          },
        },
        categories: [
          'TASKS APPROVING',
          'KNOWLEDGE TRANSFER',
          'PRODUCTION PARALLEL',
          'LIVE EXECUTION',
        ],
      },
    };
  }
}
