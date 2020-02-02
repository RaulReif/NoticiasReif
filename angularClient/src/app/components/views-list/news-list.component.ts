import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-views-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  views: any = [];

  constructor(private viewsService: NewsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.viewsService.getAll().subscribe(
      res => {
        this.views = res;
      },
      err => console.error(err)
    );
  }

  delete(id: string) {
    this.viewsService.delete(id).subscribe(
      res => this.showDelete(),
      err => console.log(err)
    );
  }

  showDelete() {
    this.toastr.error('Your views has been deleted', 'Deleted');
    this.viewsService.getAll().subscribe(
      res => {
        this.views = res;
      },
      err => console.error(err)
    );
  }

}
