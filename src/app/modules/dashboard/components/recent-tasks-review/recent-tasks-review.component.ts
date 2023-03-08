import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
import { TitleStrategy } from '@angular/router';

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-recent-tasks-review',
  templateUrl: './recent-tasks-review.component.html',
  styleUrls: ['./recent-tasks-review.component.scss'],
})
export class RecentTasksReviewComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  swiperPage: number = 1;
  swiperPageCount: number = 2;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.swiperPageCount = this.swiper.swiperRef.slides.length;
  }

  slideNext() {
    this.swiper.swiperRef.slideNext(1000);
  }

  slidePrev() {
    this.swiper.swiperRef.slidePrev(1000);
  }

  onSlideChange() {
    this.swiperPage = this.swiper.swiperRef.activeIndex + 1;
  }
}
