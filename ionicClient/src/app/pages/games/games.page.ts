import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news-service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {

  news: any = [];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllOfSection('games').subscribe(
        res => this.news = res,
        err => console.log(err)
    );
  }

}
