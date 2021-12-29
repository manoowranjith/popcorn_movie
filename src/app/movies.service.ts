import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movieList:{id : number, name : String, release : String, poster : String, likes : number, views : number}[]=[]


  MOVIE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=f78f662197effea8882bc16330c19b01&language=en-US&page=1"
  SCENE_URL = "https://api.themoviedb.org/3/movie/"

  constructor(private http : HttpClient, private router : Router) {}


  changingMovie(category:any) : {id : number, name : String, release : String, poster : String, likes : number, views : number}[]
  {
    // alert(category)
    if(category === "Popular")
    {
      return this.popular()
    }
    else if(category === "Top")
    {
      return this.top()
    }
   else
    {
      return this.upcoming()
    }
  }

  popular()
  {
    this.MOVIE_URL="https://api.themoviedb.org/3/movie/popular?api_key=f78f662197effea8882bc16330c19b01&language=en-US&page=1"
    return this.getmovies()
  }

  top()
  {
    this.MOVIE_URL="https://api.themoviedb.org/3/movie/top_rated?api_key=f78f662197effea8882bc16330c19b01&language=en-US&page=2"
    return this.getmovies()
  }

  upcoming()
  {
    this.MOVIE_URL="https://api.themoviedb.org/3/movie/upcoming?api_key=f78f662197effea8882bc16330c19b01&language=en-US&page=3"
    return this.getmovies()
  }

  getmovies()
  {
    this.movieList=[]
    this.http.get <any>(this.MOVIE_URL) 
    .subscribe (data => {
      const gotMovies: any= data.results
      // console.log(gotMovies)
      for(let movie of gotMovies)
      {
        const movieDetails={
          id : movie.id,
          name : movie.original_title,
          release : movie.release_date,
          poster : "https://image.tmdb.org/t/p/original/"+movie.poster_path,
          likes : movie.vote_count,
          views : Math.floor(movie.popularity)
        }
        this.movieList.push(movieDetails)
      }
      // console.log(this.movieList)
    });
    return this.movieList
  }

  getmoviesScene(id : number)
  {
    // var movieScene = ""
    this.http.get <any>(this.SCENE_URL+id+"/videos?api_key=f78f662197effea8882bc16330c19b01&language=en-US") 
    .subscribe (data => {
      const gotMoviesScene: any= data.results[0].key
      console.log(gotMoviesScene)
      this.router.navigateByUrl('/movie/'+id, { state: { id:id , link:"https://www.youtube.com/embed/"+gotMoviesScene } });
      // movieScene = gotMoviesScene
    });
    // console.log(movieScene)
    // return movieScene
  }
 
  
}
