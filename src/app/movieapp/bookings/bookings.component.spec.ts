import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsComponent } from './bookings.component';
import { MovieService } from 'src/app/movie.service';
import { Ticket } from '../models/Ticket';
import { of } from 'rxjs';
import { FormGroup } from '@angular/forms';

xdescribe('BookingsComponent', () => {
  let component: BookingsComponent;
  let fixture: ComponentFixture<BookingsComponent>;
  let movieService: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    const movieServiceSpy = jasmine.createSpyObj('MovieService', ['validateMovieName', 'forGettingAllBookedTickets']);

    await TestBed.configureTestingModule({
      declarations: [BookingsComponent],
      providers: [{ provide: MovieService, useValue: movieServiceSpy }]
    }).compileComponents();

    movieService = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return all tickets', () => {
    expect(component).toBeTruthy();
  });

  it('should get all tickets for a movie when form is submitted', () => {
    const movieName = 'Movie1';
    const tickets: Ticket[] = [
      {
        loginId: 'user',
        movieName: 'Dasara',
        theatreName: 'miraj',
        noOfTickets: 2,
        seatNumber: ['a1', 'a2'],
      },
    ];
    const formGroup: FormGroup = new FormGroup({});

    movieService.validateMovieName.and.returnValue(movieName);
    movieService.forGettingAllBookedTickets.and.returnValue(of(tickets));

    component.movieName = movieName;
    component.isFormSubmit = false;

    component.getAllTickets();

    expect(movieService.validateMovieName).toHaveBeenCalledWith(movieName);
    expect(movieService.forGettingAllBookedTickets).toHaveBeenCalledWith(
      movieName
    );
    expect(component.isFormSubmit).toBeTrue();
    expect(component.allTickets).toEqual(tickets);
  });

  it('should not get tickets if form is not submitted', () => {
    component.isFormSubmit = false;

    component.getAllTickets();

    expect(movieService.validateMovieName).not.toHaveBeenCalled();
    expect(movieService.forGettingAllBookedTickets).not.toHaveBeenCalled();
    expect(component.isFormSubmit).toBeFalse();
    expect(component.allTickets).toEqual([]);
  });
});
