import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SwiperCore, { SwiperOptions, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public res: ResultDetail;

  public config: SwiperOptions = {
    slidesPerView: 1,
    pagination: { clickable: true },
    autoplay: true,
  };

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const fid = this.route.snapshot.params.id;
    const url =
      'https://www.fastmock.site/mock/49df4e12bc26fdd62df9f710f7422813/api/detail/' +
      fid;
    this.http.get(url).subscribe((data: any) => {
      // console.log(data.data);
      this.res = data.data;
      console.log(this.res);
    });
  }
}

interface ResultDetail {
  category: string;
  cpu: string;
  details: string;
  disk: string;
  familyId: string;
  isOnsale: string;
  lid: string;
  lname: string;
  memory: string;
  os: string;
  picList: PicList[];
  price: string;
  promise: string;
  resolution: string;
  shelfTime: string;
  soldCoucnt: string;
  spec: string;
  subTitle: string;
  title: string;
  videoCard: string;
  videoMemory: string;
}

interface PicList {
  laptopId: string;
  lg: string;
  md: string;
  pid: string;
  sm: string;
}
