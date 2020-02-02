import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../services/news.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-views-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit {


  date = new Date();
  news: any = {
    id: 0,
    content: '',
    image: '',
    title: '',
    subtitle: '',
    section: '',
    author: ''
  };

  // tslint:disable-next-line:variable-name
  section_options: string[] = [
    'Policy', 'Sports', 'Games', 'Finance', 'Fitness'
  ];

  edit = false;

  constructor(private newsService: NewsService, private toastr: ToastrService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.newsService.getOne(id).subscribe(
      res => {
        this.news = res;
        this.edit = true;
      },
      err => console.log(err)
    );
  }

  saveNewNews() {
    this.newsService.create(this.news).subscribe(
      res => this.showSucess(),
      err => console.log(err)
    );
  }

  editNews() {
    this.newsService.update(this.news, this.news.id).subscribe(
      res => {
        this.toastr.warning('Your views has been updated!', 'Updated');
      },
      err => console.log(err)
    );
  }


  showSucess() {
    this.toastr.success('Your news has been created!', 'Created');
    this.news.title = '';
    this.news.content = '';
    this.news.image = '';
    this.news.subtitle = '';
    this.news.author = '';
    this.news.section = '';
  }

}
