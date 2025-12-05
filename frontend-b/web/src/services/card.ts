import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  private baseURl = 'api'

  constructor(private http: HttpClient) {
  }

  
}
