import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  getAllOfSection(section: string) {
    return this.http.get(`${this.url}/section/${section}`);
  }
}
