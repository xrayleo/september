import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  public res: Result;
  public id = 3233;

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    const url =
      'https://www.fastmock.site/mock/49df4e12bc26fdd62df9f710f7422813/api/cart/';
    this.http.get(url + this.id).subscribe((data: any) => {
      this.res = data.data;
      // console.log(this.res.products);
    });
  }
}

interface Result {
  products: ProductsResult[];
  uid?: string;
}

interface ProductsResult {
  count: string;
  did: string;
  pic: string;
  price: string;
  title: string;
}
