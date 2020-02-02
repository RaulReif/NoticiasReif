import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../models/News';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = 'http://localhost:3000/api/news';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.url}`);
  }

  getOne(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  create(views: News) {
    return this.http.post(`${this.url}`, views);
  }

  update(views: News, id: string) {
    return this.http.put(`${this.url}/${id}`, views);
  }

  delete(id: string | number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
