import { Component, OnInit } from '@angular/core';
import { ViewsService } from '../../services/views.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-views-list',
  templateUrl: './views-list.component.html',
  styleUrls: ['./views-list.component.css']
})
export class ViewsListComponent implements OnInit {

  views: any = [];

  constructor(private viewsService: ViewsService, private toastr: ToastrService) { }

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
