import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news-service';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.page.html',
  styleUrls: ['./fitness.page.scss'],
})
export class FitnessPage implements OnInit {

  news: any = []

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllOfSection('fitness').subscribe(
        res => this.news = res,
        err => console.log(err)
    );
  }
}
