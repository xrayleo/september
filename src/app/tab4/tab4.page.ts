import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  username: string;
  password: string;

  constructor(public http: HttpClient, public alertC: AlertController) {}

  ngOnInit() {}

  login() {
    const url =
      'https://www.fastmock.site/mock/49df4e12bc26fdd62df9f710f7422813/api/login';
    const params = {
      username: this.username,
      password: this.password,
    };
    //添加特殊的请求配置
    // const options = {
    //   headers: new HttpHeaders({
    //     'content-Type': 'application/x-www-form-urlencoded',
    //   }),
    // };

    //默认,可不设置
    //application/json; charset=utf-8
    this.http.post(url, params).subscribe((res: any) => {
      // console.log(res);
      if (res.userInfo.success) {
        this.alertC
          .create({
            header: 'Message',
            message: res.userInfo.msg,
            buttons: ['ok'],
          })
          .then((response) => {
            response.present();
          });
      } else {
        this.alertC
          .create({
            header: 'Message',
            message: res.userInfo.msg,
            buttons: ['ok'],
          })
          .then((response) => {
            response.present();
          });
      }
    });
  }
}
