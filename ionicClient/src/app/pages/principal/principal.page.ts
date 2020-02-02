import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news-service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  indice  = 0;
  newsShowed = [];
  news: any = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAll().subscribe(
        res => {
          this.news = res;
          let indiceTemporal = 0;
          while (indiceTemporal < 5 && this.indice < this.news.length) {
            this.newsShowed.push(this.news[this.indice]);
            indiceTemporal++;
            this.indice++;
          }},
        err => console.log(err)
    );
  }

  loadData(event) {
    setTimeout(() => {
      let indiceTemporal = 0;
      while (indiceTemporal < 5 && this.indice < this.news.length) {
        this.newsShowed.push(this.news[this.indice]);
        indiceTemporal++;
        this.indice++;
      }
      event.target.complete();
    }, 1000);
  }

}
