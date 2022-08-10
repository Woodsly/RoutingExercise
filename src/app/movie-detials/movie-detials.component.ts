import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detials',
  templateUrl: './movie-detials.component.html',
  styleUrls: ['./movie-detials.component.css']
})
export class MovieDetialsComponent implements OnInit {

  displayMovie:Movie = {} as Movie;

  constructor(private route:ActivatedRoute, private movieService:MovieService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    this.displayMovie = this.movieService.getMovieById(id);
  }


  
}
