import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  movieList:{id : number, name : String, release : String, poster : String, likes : number, views : number}[]=[]


  MOVIE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=f78f662197effea8882bc16330c19b01&language=en-US&page=1"
  SCENE_URL = "https://api.themoviedb.org/3/movie/"

  constructor(private http : HttpClient, private router : Router, private movieService :MoviesService) {}

  ngOnInit(): void {
    this.movieList=this.movieService.getmovies()
    console.log(this.movieList)
    // console.log(history.state.category)
    
  }
  changingMovie(category:any)
  {
    this.movieList=this.movieService.changingMovie(category)
  }
  getmoviesScene(movieid : number)
  {
    this.movieService.getmoviesScene(movieid)
  }
  // changingMovie(category:any)
  // {
  //   // alert(category)
  //   if(category === "Popular")
  //   {
  //     this.popular()
  //   }
  //   if(category === "Top")
  //   {
  //     this.top()
  //   }
  //   if(category === "Upcoming")
  //   {
  //     this.upcoming()
  //   }
  // }

  // popular()
  // {
  //   this.MOVIE_URL="https://api.themoviedb.org/3/movie/popular?api_key=f78f662197effea8882bc16330c19b01&language=en-US&page=1"
  //   this.getmovies()
  // }

  // top()
  // {
  //   this.MOVIE_URL="https://api.themoviedb.org/3/movie/top_rated?api_key=f78f662197effea8882bc16330c19b01&language=en-US&page=2"
  //   this.getmovies()
  // }

  // upcoming()
  // {
  //   this.MOVIE_URL="https://api.themoviedb.org/3/movie/upcoming?api_key=f78f662197effea8882bc16330c19b01&language=en-US&page=3"
  //   this.getmovies()
  // }

  // getmovies()
  // {
  //   this.movieList=[]
  //   this.http.get <any>(this.MOVIE_URL) 
  //   .subscribe (data => {
  //     const gotMovies: any= data.results
  //     console.log(gotMovies)
  //     for(let movie of gotMovies)
  //     {
  //       const movieDetails={
  //         id : movie.id,
  //         name : movie.original_title,
  //         release : movie.release_date,
  //         poster : "https://image.tmdb.org/t/p/original/"+movie.poster_path,
  //         likes : movie.vote_count,
  //         views : Math.floor(movie.popularity)
  //       }
  //       this.movieList.push(movieDetails)
  //     }
  //     // console.log(this.movieList)
  //   });
  // }

  // getmoviesScene(id : any)
  // {
    
  //   this.http.get <any>(this.SCENE_URL+id+"/videos?api_key=f78f662197effea8882bc16330c19b01&language=en-US") 
  //   .subscribe (data => {
  //     const gotMoviesScene: any= data.results[0].key
  //     console.log(gotMoviesScene)
  //     this.router.navigateByUrl('/movie/'+id, { state: { id:id , link:"https://www.youtube.com/embed/"+gotMoviesScene } });
  //   });
  // }
  

  // isUdefined()
  // {
  //   if(typeof this.movieList === "undefined")
  //   {
  //     return false
  //   }
  //   else{
  //     return true;
  //   }
  // }
}