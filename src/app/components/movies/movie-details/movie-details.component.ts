import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Movie } from '../movie';
import { MoviesService } from '../../../services/movies.service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

	constructor(
	  private route: ActivatedRoute,
	  private router: Router,
	  private _ms: MoviesService
	) {}

	movie: Movie;
	loader: boolean = false;

	ngOnInit() {

		this.loader = true;

	  this.route.params
	    .switchMap((params: Params) => this._ms.getMovie(params['id']))
	    .subscribe((data: any) => {

	    	if( data.success == true ){
	    		this.movie = data.movie;
	    	}

	    	this.loader = false;

	    });


	}




}
