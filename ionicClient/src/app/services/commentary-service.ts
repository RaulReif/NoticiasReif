import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Commentary} from '../models/Commentary';

@Injectable({
  providedIn: 'root'
})
export class CommentaryService {

  url = 'http://localhost:3000/api/comments';

  constructor(private http: HttpClient) { }

  getAll(id: string | number) {
    return this.http.get(`${this.url}/${id}`);
  }

  create(commentary: Commentary) {
    return this.http.post(`${this.url}`, commentary);
  }
}
