// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { DeletemovieComponent } from './deletemovie.component';

// describe('DeletemovieComponent', () => {
//   let component: DeletemovieComponent;
//   let fixture: ComponentFixture<DeletemovieComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ DeletemovieComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(DeletemovieComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletemovieComponent } from './deletemovie.component';
import { of, throwError } from 'rxjs';
import { MovieService } from 'src/app/movie.service';
import { HttpClient,HttpClientModule,HttpHandler } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AllmoviesComponent } from '../allmovies/allmovies.component';
import { BookingsComponent } from '../bookings/bookings.component';
import { BookticketComponent } from '../bookticket/bookticket.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { PracticeComponent } from '../practice/practice.component';
import { RegisterComponent } from '../register/register.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';
import { SearchmovieComponent } from '../searchmovie/searchmovie.component';
import { UpdatestatusComponent } from '../updatestatus/updatestatus.component';

describe('DeletemovieComponent', () => {
  let component: DeletemovieComponent;
  let fixture: ComponentFixture<DeletemovieComponent>;
  let movieService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        // AppComponent,
        // PracticeComponent,
        // LoginComponent,
        // HomeComponent,
        // RegisterComponent,
        // BookingsComponent,
        // BookticketComponent,
        // AllmoviesComponent,
        // ResetpasswordComponent,
        DeletemovieComponent
        // UpdatestatusComponent,
        // SearchmovieComponent
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemovieComponent);
    component = fixture.componentInstance;
    movieService = TestBed.inject(MovieService);
    fixture.detectChanges();
  });

  it('should delete a movie', () => {
    const movieName = 'Example Movie';
    const response = { message: 'Movie deleted successfully' };

    spyOn(movieService, 'forDeletingAMovie').and.returnValue(of(response));

    component.movieName = movieName;
    component.deleteMovie();

    expect(component.message).toEqual(response.message);
    expect(movieService.forDeletingAMovie).toHaveBeenCalledWith(movieName);
  });

  it('should handle error when deleting a movie', () => {
    const movieName = 'Example Movie';
    const error = { error: 'Error deleting movie' };

    spyOn(movieService, 'forDeletingAMovie').and.returnValue(
      throwError(error)
    );

    component.movieName = movieName;
    component.deleteMovie();

    expect(component.message).toEqual(error.error);
  });
});

