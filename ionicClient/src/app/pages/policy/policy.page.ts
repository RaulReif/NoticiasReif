import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news-service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.page.html',
  styleUrls: ['./policy.page.scss'],
})
export class PolicyPage implements OnInit {

  news: any = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllOfSection('policy').subscribe(
        res => this.news = res,
        err => console.log(err)
    );
  }
}
