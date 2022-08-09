import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

//import swiper core and required modules
import SwiperCore, {
  SwiperOptions,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper';

//install swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public userInfo: Result[];

  public config: SwiperOptions = {
    //轮播图每页显示的数量
    slidesPerView: 1,
    spaceBetween: 50,
    //自动播放
    // autoplay: {
    //   delay: 200,
    //   // disableOnInteraction: false, //用户滑动之后是否禁止自动切换,默认为true
    // },
    //上一张和下一张轮播图切换
    navigation: true,
    //圆点导航
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    const url =
      'https://www.fastmock.site/mock/49df4e12bc26fdd62df9f710f7422813/api/userlist';
    this.http.get(url).subscribe((res: any) => {
      console.log(res);
      this.userInfo = res.list;
    });
  }
}

interface Result {
  id: number;
  name: string;
  age: number;
  address: string;
}
