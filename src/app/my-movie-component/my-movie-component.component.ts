import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  videoSource = "";

  constructor() {
   }

  ngOnInit(): void {
    this.videoSource = history.state.link
    
    console.log(history.state.link)
  }
  

}
