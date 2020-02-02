import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news-service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.page.html',
  styleUrls: ['./finance.page.scss'],
})
export class FinancePage implements OnInit {

  news: any = []

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllOfSection('finance').subscribe(
        res => this.news = res,
        err => console.log(err)
    );
  }
}
