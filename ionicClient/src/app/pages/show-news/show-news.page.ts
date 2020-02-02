import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from '../../services/news-service';
import {AlertController} from '@ionic/angular';
import { CommentaryService } from '../../services/commentary-service';

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.page.html',
  styleUrls: ['./show-news.page.scss'],
})
export class ShowNewsPage implements OnInit {

  news: any = {
    id: 0,
    content: '',
    image: '',
    title: '',
    subtitle: '',
    section: '',
    author: ''
  };

  commentary: any = {
    id: 0,
    name: '',
    email: '',
    commentary: '',
    id_news: 0
  };

  comments: any = [];

  constructor(private activatedRoute: ActivatedRoute,
              private newsService: NewsService,
              private alertController: AlertController,
              private commentaryService: CommentaryService) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.newsService.getOne(id).subscribe(
        res => {
          this.news = res;
        },
        err => console.log(err)
    );

    this.commentaryService.getAll(id).subscribe(
        res => {
          this.comments = res;
        }
    );
  }

  comment() {
    this.commentary.id_news = this.news.id;
    this.commentaryService.create(this.commentary).subscribe(
        res => {
          this.commentary.name = '';
          this.commentary.email = '';
          this.commentary.commentary = '';
          this.commentaryService.getAll(this.news.id).subscribe(
              // tslint:disable-next-line:no-shadowed-variable
              res => {
                this.comments = res;
              }
          );
          this.presentAlert();
        }
    );
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sucessfull',
      message: 'Yor commentary has been created !',
      buttons: ['OK']
    });
    await alert.present();
  }

}
