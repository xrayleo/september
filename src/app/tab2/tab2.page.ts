import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public userInfo: Result[];
  public url =
    'https://www.fastmock.site/mock/49df4e12bc26fdd62df9f710f7422813/api/userlist';
  //用于确定滑动下拉不再需要请求数据,为true时不请求
  public isLast = false;

  constructor(private http: HttpClient, private router: NavController) {}

  ngOnInit(): void {
    this.http.get(this.url).subscribe((res: any) => {
      this.userInfo = res.list;
    });
  }

  //滑动到底部请求数据
  loadData(e) {
    //通过变量不断的增加的分页数+1,最终传输给接口,
    this.http.get(this.url).subscribe((res: any) => {
      this.userInfo = this.userInfo.concat(res.list);
      this.isLast = res.code === 200 && res.desc === 'success' ? false : true;
      e.target.complete();
    });
  }

  //下拉刷新请求数据
  doRefresh(e) {
    this.http.get(this.url).subscribe((res: any) => {
      this.userInfo = this.userInfo.concat(res.list);
      e.target.complete();
    });
  }

  //跳转到详情页
  goDetails(id) {
    // console.log(id);
    this.router.navigateForward(['detail', { id }]);
  }
}

interface Result {
  id: number;
  name: string;
  age: number;
  address: string;
}
