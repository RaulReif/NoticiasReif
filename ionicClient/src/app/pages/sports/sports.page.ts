import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news-service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {

  news: any = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllOfSection('games').subscribe(
        res => this.news = res,
        err => console.log(err)
    );
  }
}
