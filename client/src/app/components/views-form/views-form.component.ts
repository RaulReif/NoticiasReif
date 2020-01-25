import {Component, OnInit} from '@angular/core';
import {Views} from '../../models/Views';
import {ViewsService} from '../../services/views.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-views-form',
  templateUrl: './views-form.component.html',
  styleUrls: ['./views-form.component.css']
})
export class ViewsFormComponent implements OnInit {


  date = new Date();
  views: any = {
    id: 0,
    content: '',
    image: '',
    title: '',
  };

  edit = false;

  constructor(private viewsService: ViewsService, private toastr: ToastrService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.viewsService.getOne(id).subscribe(
      res => {this.views = res;
              this.edit = true; },
      err => console.log(err)
    );
  }

  saveNewNews() {
    this.viewsService.create(this.views).subscribe(
      res => this.showSucess(),
      err => console.log(err)
    );
  }

  editNews() {
    this.viewsService.update(this.views, this.views.id).subscribe(
      res => {
        this.toastr.warning('Your views has been updated!', 'Updated');
      },
      err => console.log(err)
    );
  }


  showSucess() {
    this.toastr.success('Your news has been created!', 'Created');
    this.views.title = '';
    this.views.content = '';
    this.views.image = '';
  }

}
