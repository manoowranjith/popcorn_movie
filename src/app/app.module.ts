import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';
import { SafePipe } from './safe.pipe';
import { MoviesService } from './movies.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    MyMovieComponentComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
