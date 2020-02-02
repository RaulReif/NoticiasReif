import {Component, Input, OnInit} from '@angular/core';
import {NewsService} from '../../services/news-service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  indice = 0;
  @Input() section: string;
  newsShowed: any = [];
  news: any = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAllOfSection(this.section).subscribe(
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
