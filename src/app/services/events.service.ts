import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private base_url: string = environment.base_url

  constructor(private http: HttpClient) { }

  getChannelIdsAndEvents() {
    return this.http.get<any>(this.base_url)
  }
}
