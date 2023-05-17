import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/movie.service';
import { Movie } from '../models/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchMovie : string = '';
  loggedInAsGuest : boolean = false; 
  loggedInAsUser : boolean = false;
  movieNameToSearch : string = '';
  message : string = '';
  movies : Movie[] = []
  isSearchedForMovie : boolean = false;
  
  constructor(public router: Router,private movieService:MovieService){
  }
  
  loginForGuest(){
    localStorage.removeItem('loginStatus');
    this.router.navigate(['/register']);
  }

  getUserStatus(){
    if(localStorage.getItem('loginStatus') === 'guest' || localStorage.getItem('loginStatus') === 'user'){
      return false;
    }
    else {
      return true;
    }
  }

  isLoggedInAsUser(){
    if(localStorage.getItem('loginStatus') === 'user'){
      return true;
    } 
    else{
      return false;
    }
  }

  getStatusForLogout(){
    if(localStorage.getItem('loginStatus') === 'user' || localStorage.getItem('loginStatus') === 'admin'){
      return true;
    }
    else {
      return false;
    }
  }

  logout(){
    localStorage.removeItem('loginStatus');
    localStorage.removeItem('token');
    localStorage.removeItem('loginId');
    this.router.navigate(['/login']);
  }

  onSubmit(){
    this.movieService.setMovieNameToSearch(this.movieNameToSearch);
    this.router.navigate(['/searchmovie']);
  }

  // searchByMovieName(){
  //   // console.log(this.movieNameToSearch)
  //   // this.movieService.setMovieNameToSearch(this.movieNameToSearch);
  //   // this.router.navigate(['/searchbymoviename']);
  // }
  // getMovieImagePath(movieName: string){
  //   switch(movieName){
  //     case 'Dasara': return '../../../assets/images/movies/Dasara.jpg';
  //     case 'Balagam': return '../../../assets/images/movies/Balagam.jpg';
  //     case 'Bhoola': return '../../../assets/images/movies/Bhoola.jpg';
  //     case 'Vidudhala': return '../../../assets/images/movies/Vidudhala.jpg';
  //     case 'Pathaan': return '../../../assets/images/movies/Pathaan.jpg';
  //     case 'Pushpa': return '../../../assets/images/movies/Pushpa.jpg';
  //     default: return '';
  //   }
  // }

  // isLoggedAsUser(){
  //   if(localStorage.getItem('loginStatus') === 'user'){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

  // booktickets(movieName:string, movieTheatre:string){
  //   this.movieService.setMovieName(movieName);
  //   this.movieService.setMovieTheatre(movieTheatre);
  //   this.router.navigate(['/bookticket'])
  // }
  
  ngOnInit(): void {
    if(localStorage.getItem('loginStatus') === 'guest') {
      this.loggedInAsGuest = true;
    }
    else if(localStorage.getItem('loginStatus') === 'user'){
      this.loggedInAsUser = true;
    }
  }

}
