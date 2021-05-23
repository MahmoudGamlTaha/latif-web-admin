import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardStatisticsService, Idashboard } from 'src/app/shared/service/dashboard-services/dashboard-statistics.service';
import * as chartData from '../../shared/data/chart';
import { doughnutData, pieData } from '../../shared/data/chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  DashboardStatistics;
  userSubscriptionsCount=0;
  ServiceAdsCount=0;
  AccessoriesAdsCount=0;
  PetCareAdsCount=0;
  AllAdsCount=0;
  PetAdsCount=0;

  public doughnutData = doughnutData;
  public pieData = pieData;
  constructor(private dashServ:DashboardStatisticsService) {

    
    Object.assign(this, { doughnutData, pieData })

  }

  // doughnut 2
  public view = chartData.view;
  public doughnutChartColorScheme = chartData.doughnutChartcolorScheme;
  public doughnutChartShowLabels = chartData.doughnutChartShowLabels;
  public doughnutChartGradient = chartData.doughnutChartGradient;
  public doughnutChartTooltip = chartData.doughnutChartTooltip;

  public chart5 = chartData.chart5;


  // lineChart
  public lineChartData = chartData.lineChartData;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartColors = chartData.lineChartColors;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartType = chartData.lineChartType;

  // lineChart
  public smallLineChartData = chartData.smallLineChartData;
  public smallLineChartLabels = chartData.smallLineChartLabels;
  public smallLineChartOptions = chartData.smallLineChartOptions;
  public smallLineChartColors = chartData.smallLineChartColors;
  public smallLineChartLegend = chartData.smallLineChartLegend;
  public smallLineChartType = chartData.smallLineChartType;

  // lineChart
  public smallLine2ChartData = chartData.smallLine2ChartData;
  public smallLine2ChartLabels = chartData.smallLine2ChartLabels;
  public smallLine2ChartOptions = chartData.smallLine2ChartOptions;
  public smallLine2ChartColors = chartData.smallLine2ChartColors;
  public smallLine2ChartLegend = chartData.smallLine2ChartLegend;
  public smallLine2ChartType = chartData.smallLine2ChartType;

  // lineChart
  public smallLine3ChartData = chartData.smallLine3ChartData;
  public smallLine3ChartLabels = chartData.smallLine3ChartLabels;
  public smallLine3ChartOptions = chartData.smallLine3ChartOptions;
  public smallLine3ChartColors = chartData.smallLine3ChartColors;
  public smallLine3ChartLegend = chartData.smallLine3ChartLegend;
  public smallLine3ChartType = chartData.smallLine3ChartType;

  // lineChart
  public smallLine4ChartData = chartData.smallLine4ChartData;
  public smallLine4ChartLabels = chartData.smallLine4ChartLabels;
  public smallLine4ChartOptions = chartData.smallLine4ChartOptions;
  public smallLine4ChartColors = chartData.smallLine4ChartColors;
  public smallLine4ChartLegend = chartData.smallLine4ChartLegend;
  public smallLine4ChartType = chartData.smallLine4ChartType;

  public chart3 = chartData.chart3;



  // events
  public chartClicked(e: any): void {
  }
  public chartHovered(e: any): void {
  }

  ngOnInit() {
    
    this.dashServ.getbDashboardStatistics().subscribe(
      (data:any) => {
        this.DashboardStatistics = data.response.data;
        this.userSubscriptionsCount =  parseInt(data.response.data.userSubscriptionsCount);
      this.ServiceAdsCount =  parseInt(data.response.data.ServiceAdsCount);
      this.AccessoriesAdsCount =  parseInt(data.response.data.AccessoriesAdsCount);
      this.PetCareAdsCount =  parseInt(data.response.data.PetCareAdsCount);
      this.AllAdsCount =  parseInt(data.response.data.AllAdsCount);
      this.PetAdsCount =  parseInt(data.response.data.PetAdsCount);
      },
      (error) => {
        console.log('error', error);
      }
    );
    
  console.log( this.AllAdsCount);
        // console.log( this.DashboardStatistics.userSubscriptionsCount);
        // console.log( this.DashboardStatistics.AllAdsCount);
        // console.log( this.DashboardStatistics.PetAdsCount);
        // console.log( this.DashboardStatistics.PetCareAdsCount);
        // console.log( this.DashboardStatistics.ServiceAdsCount);
        // console.log( this.DashboardStatistics.userSubscriptionsCount);
  }

}
