import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { Movie } from './movieapp/models/Movie';
import { User } from './movieapp/models/User';
import { LoginRequest } from './movieapp/models/LoginRequest';
import { JwtResponse } from './movieapp/models/JwtResponse';
import { Ticket } from './movieapp/models/Ticket';
import { Message } from './movieapp/models/Message';

describe('MovieService', () => {
  let service: MovieService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });
    service = TestBed.inject(MovieService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate', () => {
    expect(service.validateMovieName("movieName")).toEqual("Moviename");
  })

  // it('should retrieve all movies', () => {
  //   const mockMovies: Movie[] = [
  //     { movieName: 'Movie 1', theatreName:'miraj', noOfTicketsAvailable:10, ticketsStatus: 'Available' },
  //     { movieName: 'Movie 2', theatreName:'miraj', noOfTicketsAvailable:0, ticketsStatus: 'Sold out'  }
  //   ];

  //   service.getAllMovies().subscribe((movies: Movie[]) => {
  //     expect(movies).toEqual(mockMovies);
  //   });

  //   const req = httpTestingController.expectOne(service.urlForGetAllMovies);
  //   expect(req.request.method).toEqual('GET');
  //   req.flush(mockMovies);
  // });

  // it('should retrieve movies by name', () => {
  //   const movieName = 'Movie 1';
  //   const mockMovies: Movie[] = [
  //     {  movieName: 'Movie 1', theatreName:'miraj', noOfTicketsAvailable:10, ticketsStatus: 'Available' }
  //   ];

  //   service.getMovieByName(movieName).subscribe((movies: Movie[]) => {
  //     expect(movies).toEqual(mockMovies);
  //   });

  //   const req = httpTestingController.expectOne(service.urlForGetMovieByName + movieName);
  //   expect(req.request.method).toEqual('GET');
  //   req.flush(mockMovies);
  // });

  // it('should register a user', () => {
  //   const mockUser: User = {
  //     loginId: 'John Doe',
  //     firstName: 'John',
  //     lastName : 'Doe',
  //     email: 'johndoe@example.com',
  //     contactNumber : 1234567890,
  //     password: '123456',
  //     roles : [ 'user' ]
  //   };

  //   service.registerAUser(mockUser).subscribe((response: any) => {
  //     expect(response).toBeTruthy();
  //   });

  //   const req = httpTestingController.expectOne(service.urlForRegisterAUser);
  //   expect(req.request.method).toEqual('POST');
  //   req.flush({}); // Assuming the response is empty for registration
  // });
});
