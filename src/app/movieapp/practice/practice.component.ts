import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';
import { MovieService } from 'src/app/movie.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../models/User';
import { LoginRequest } from '../models/LoginRequest';
import { Ticket } from '../models/Ticket';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  
  allMovies: Movie[] = [];
  message:string="";
  notAvailableMovieName:string = "Pathaan";

  sampleUser: User = {
    loginId : "saiM",
    firstName : "Sai",
    lastName : "Merugu",
    email : "saiM@gmail.com",
    contactNumber : 1234567890,
    roles : ["User"],
    password : "sai@123"
  }

  sampleLoginRequest : LoginRequest = {
    loginId : this.sampleUser.loginId,
    password : this.sampleUser.password
  } 

  userToken : string = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYWlNIiwiaWF0IjoxNjgyNTc3OTAwLCJleHAiOjE2ODI2NjQzMDB9.RZ6E2QwwUsIvwSNsSvrVvBO_6IymjLRk98sKFhFzC1lnv6gVp4HG8uFmizEXjX2wpnPy8Qmbn6xuk9oeUlVKtQ" ;

  sampleTicket : Ticket = {
    loginId : this.sampleUser.loginId,
    movieName : "Dasara",
    theatreName : "Miraj",
    noOfTickets : 2,
    seatNumber : ["a1","a2"]
  }

  loginRequestForPasswordChange : LoginRequest = {
    loginId : this.sampleUser.loginId,
    password : "sai@123"
  }

  adminLoginRequest : LoginRequest = {
    loginId : "chandank",
    password : "chan@123"
  }

  updatedMovie : Movie = {
    movieName:"Dasara",
    theatreName:"Miraj",
    noOfTicketsAvailable: 122,
    ticketsStatus: "Book Asap"
  }

  // Inject the HttpClient service
    constructor(private http: HttpClient,private movieService:MovieService) {

      // this.movieService.getAllMovies().subscribe(
      //     (res)=>{
      //       console.log("Result got from hitting http://localhost:8080/api/v1.0/moviebooking/all ",res)
      //       this.allMovies = res;
      //     }
      //   )

      //   this.movieService.getMovieByName("Dasara").subscribe(
      //     (res)=>{
      //       console.log(res)
      //     },
      //     (err)=>{
      //       console.log(err.error)
      //       if(err.status === 404){
      //         console.log("No movies found for this name: ", this.notAvailableMovieName)
      //       }
      //     }
      //   )

        // for adding a new user
        // this.movieService.registerAUser(this.sampleUser).subscribe(
        //   (response) => {
        //     console.log(response);
        //   }
        // )

        // this.movieService.login(this.sampleLoginRequest).subscribe(
        //   (response) => {
        //     console.log(response.accessToken);
        //     this.userToken = response.accessToken;
        //   }
        // )
        
        // this.movieService.bookTickets(this.sampleTicket).subscribe(
        //   (Response)=>{
        //     console.log(Response)
        //   },
        //   (err)=>{
        //     console.log(err)
        //     console.log(err.error)
        //   }
        // )

        // this.movieService.forgetPassword(this.loginRequestForPasswordChange).subscribe(
        //   (response)=>{
        //     console.log(response)
        //   }
        // )

        // this.movieService.login(this.adminLoginRequest).subscribe(
        //     (response) => {
        //       console.log(response.accessToken);
        //       this.userToken = response.accessToken;
        //     }
        //   )

        // this.movieService.forUpdatingAMovie(this.updatedMovie).subscribe(
        //   (response) => {
        //     console.log(response);
        //   }
        // )

        // this.movieService.forDeletingAMovie("Dasara").subscribe(
        //   (response) => {
        //     console.log(response);
        //   }
        // )

        // this.movieService.forGettingAllBookedTickets("Dasara").subscribe(
        //   (response) => {
        //     console.log(response);
        //   },
        //   (error) => {console.log(error);}
        // )

    }

  ngOnInit(): void {
  }
}
