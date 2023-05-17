import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movieapp/models/Movie';
import { User } from './movieapp/models/User';
import { LoginRequest } from './movieapp/models/LoginRequest';
import { JwtResponse } from './movieapp/models/JwtResponse';
import { Ticket } from './movieapp/models/Ticket';
import { Message } from './movieapp/models/Message';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  urlForGetAllMovies: string =
    'http://localhost:8080/api/v1.0/moviebooking/all';
  urlForGetMovieByName: string =
    'http://localhost:8080/api/v1.0/moviebooking/movies/search/';
  urlForRegisterAUser: string =
    'http://localhost:8080/api/v1.0/moviebooking/register';
  urlForLogin: string = 'http://localhost:8080/api/v1.0/moviebooking/login';
  urlForBookingAMovie: string = 'http://localhost:8080/api/v1.0/moviebooking/';
  urlForPasswordReset: string = 'http://localhost:8080/api/v1.0/moviebooking/';
  urlForUpdatedAMovieStatus: string =
    'http://localhost:8080/api/v1.0/moviebooking/';
  urlForDeletingAMovie: string = 'http://localhost:8080/api/v1.0/moviebooking/';
  urlForAllTicketsBooked: string =
    'http://localhost:8080/api/v1.0/moviebooking/getallbookedtickets/';

  userToken: string = '';
  adminToken: string = '';
  movieName: string = '';
  theatreName: string = '';
  movieNameToSearch: string = '';

  constructor(private httpClient: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    console.log('send request');
    return this.httpClient.get<Movie[]>(this.urlForGetAllMovies);
  }

  getMovieByName(movieName: string): Observable<Movie[]> {
    console.log('requested for movies by name');
    return this.httpClient.get<Movie[]>(this.urlForGetMovieByName + movieName);
  }

  registerAUser(user: User) {
    return this.httpClient.post(this.urlForRegisterAUser, user, {
      responseType: 'text',
    });
  }

  login(longinRequest: LoginRequest): Observable<JwtResponse> {
    console.log('resquested for login');
    return this.httpClient.post<JwtResponse>(this.urlForLogin, longinRequest);
  }

  bookTickets(ticket: Ticket): Observable<Message> {
    return this.httpClient.post<Message>(
      this.urlForBookingAMovie + ticket.movieName + '/add',
      ticket,
      { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }
    );
  }

  forgetPassword(updatedLoginRequest: LoginRequest): Observable<Message> {
    return this.httpClient.put<Message>(
      this.urlForPasswordReset + updatedLoginRequest.loginId + '/forgot',
      updatedLoginRequest,
      { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }
    );
  }

  forUpdatingAMovie(updatedMovie: Movie): Observable<Message> {
    return this.httpClient.put<Message>(
      this.urlForUpdatedAMovieStatus +
        updatedMovie.movieName +
        '/update/' +
        updatedMovie.ticketsStatus,
      updatedMovie,
      { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }
    );
  }

  forDeletingAMovie(movieName: string): Observable<Message> {
    return this.httpClient.delete<Message>(
      this.urlForDeletingAMovie + movieName + '/delete',
      { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }
    );
  }

  forGettingAllBookedTickets(movieName: string): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(
      this.urlForAllTicketsBooked + movieName,
      { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }
    );
  }

  setMovieName(movieName: string) {
    this.movieName = movieName;
  }

  setMovieTheatre(theatre: string) {
    this.theatreName = theatre;
  }

  getMovieName() {
    return this.movieName;
  }

  getMovieTheatre() {
    return this.theatreName;
  }

  setMovieNameToSearch(movieNameToSearch: string) {
    this.movieNameToSearch = movieNameToSearch;
  }

  getMovieNameToSearch() {
    return this.movieNameToSearch;
  }

  public isAuthenticated(): boolean {
    // const token = JSON.stringify(localStorage.getItem('token'));
    // // Check whether the token is expired and return
    // // true or false
    // return !this.jwtHelper.isTokenExpired(token);
    return (
      !!localStorage.getItem('token') || !!localStorage.getItem('loginStatus')
    );
  }

  validateMovieName(name: string) {
    const arr = name.split(' ');
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    const str2 = arr.join(' ');
    // console.log(str2);
    return str2;
  }
}
