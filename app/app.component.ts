import { Component, OnInit } from "@angular/core";
import { MovieService } from "./movie.service";
// import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  movieName: string = "";
  moviesList: [];
  // faStar = faStar;
  constructor(private movieService: MovieService) {}
  ngOnInit() {
    // this.fetchMovie();
  }

  fetchMovie() {
    this.movieService.fetchMovie(this.movieName).subscribe((data: any) => {
      console.log("data", data.Search);
      this.moviesList = data.Search;
    });
  }

  searchbyName(event) {
    console.log(event);
    this.movieName = event;
  }
}
