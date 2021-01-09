import { Injectable, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  fetchMovie(name): Observable<Object> {
    return this.http.get(
      "https://www.omdbapi.com/?s=" + name + "&apikey=a0f2dbd3"
    );
  }
}
