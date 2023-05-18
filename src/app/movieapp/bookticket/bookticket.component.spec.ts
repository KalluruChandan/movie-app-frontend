import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookticketComponent } from './bookticket.component';
import { HttpClient,HttpClientModule,HttpHandler } from '@angular/common/http';
import { MovieService } from 'src/app/movie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { of, throwError } from 'rxjs';

describe('BookticketComponent', () => {
  let component: BookticketComponent;
  let fixture: ComponentFixture<BookticketComponent>;
  let array : string[] = ['a1', 'a2', 'a3', 'a4', 'a1'];
  let movieService: jasmine.SpyObj<MovieService>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BookticketComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
      ],
      providers:[MovieService,HttpClient,HttpHandler]
    })
    .compileComponents();
    movieService = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;
    fixture = TestBed.createComponent(BookticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should validate", ()=>{
    expect(component.checkForDuplicates(array)).toBe(true);
  })

  // xit('should book tickets and display success message', () => {
  //   const bookingFormValues = {
  //     movieName: 'Movie1',
  //     theatreName: 'Theatre1',
  //     noOfTickets: 2,
  //     seatNumbers: 'A1 A2'
  //   };
  //   const booking = { ...bookingFormValues };
  //   const successMessage = 'Booking Success';

  //   movieService.validateMovieName.and.callThrough();
  //   movieService.bookTickets.and.returnValue(of({ message: successMessage }));

  //   component.bookingForm.setValue(bookingFormValues);
  //   component.message = '';

  //   component.submitBookingForm();

  //   expect(movieService.validateMovieName).toHaveBeenCalledWith(booking.movieName);
  //   expect(movieService.validateMovieName).toHaveBeenCalledWith(booking.theatreName);
  //   expect(movieService.bookTickets).toHaveBeenCalledWith(booking);
  //   expect(component.message).toBe(successMessage);
  // });

  // xit('should handle error when booking tickets and display appropriate message', () => {
  //   const bookingFormValues = {
  //     movieName: 'Movie1',
  //     theatreName: 'Theatre1',
  //     noOfTickets: 2,
  //     seatNumbers: 'A1 A2'
  //   };
  //   const booking = { ...bookingFormValues };
  //   const errorMessage = 'No movies available';

  //   movieService.validateMovieName.and.callThrough();
  //   movieService.bookTickets.and.returnValue(throwError({ status: 404, error: errorMessage }));

  //   component.bookingForm.setValue(bookingFormValues);
  //   component.message = '';

  //   component.submitBookingForm();

  //   expect(movieService.validateMovieName).toHaveBeenCalledWith(booking.movieName);
  //   expect(movieService.validateMovieName).toHaveBeenCalledWith(booking.theatreName);
  //   expect(movieService.bookTickets).toHaveBeenCalledWith(booking);
  //   expect(component.message).toBe(errorMessage);
  // });
});
