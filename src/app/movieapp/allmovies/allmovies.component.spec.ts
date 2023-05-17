import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { MovieService } from 'src/app/movie.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { BookingsComponent } from '../bookings/bookings.component';
import { BookticketComponent } from '../bookticket/bookticket.component';
import { DeletemovieComponent } from '../deletemovie/deletemovie.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { PracticeComponent } from '../practice/practice.component';
import { RegisterComponent } from '../register/register.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';
import { SearchmovieComponent } from '../searchmovie/searchmovie.component';
import { UpdatestatusComponent } from '../updatestatus/updatestatus.component';
import { AllmoviesComponent } from './allmovies.component';
import { Movie } from '../models/Movie';

xdescribe('AllmoviesComponent', () => {
  let component: AllmoviesComponent;
  let fixture: ComponentFixture<AllmoviesComponent>;
  let movieService: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    const movieServiceSpy = jasmine.createSpyObj('MovieService', ['getAllMovies']);

    await TestBed.configureTestingModule({
      declarations: [
        // AppComponent,
        // PracticeComponent,
        // LoginComponent,
        HomeComponent,
        // RegisterComponent,
        // BookingsComponent,
        // BookticketComponent,
        AllmoviesComponent
        // ResetpasswordComponent,
        // DeletemovieComponent,
        // UpdatestatusComponent,
        // SearchmovieComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers:[{ provide: MovieService, useValue: movieServiceSpy }]
    })
    .compileComponents();
    movieService = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;    // fixture.detectChanges();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AllmoviesComponent);
    component = fixture.componentInstance;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("sample test", ()=>{
    expect("hello").toEqual("hello");
  })

  it('should retrieve all movies', () => {
    const mockMovies : Movie[] = [
      { movieName: 'Movie 1',theatreName:'miraj', noOfTicketsAvailable:120, ticketsStatus: 'Available' },
      { movieName: 'Movie 2', theatreName:'miraj', noOfTicketsAvailable:0,ticketsStatus: 'Sold Out' }
    ];
    movieService.getAllMovies.and.returnValue(of(mockMovies));

    fixture.detectChanges();

    expect(component.movieList).toEqual(mockMovies);
    expect(movieService.getAllMovies).toHaveBeenCalled();
  });

  it('should return the correct image path for a movie', () => {
    const imagePath = component.getMovieImagePath('Dasara');
    expect(imagePath).toBe('../../../assets/images/movies/Dasara.jpg');
  });

  it('should check if logged in as a user', () => {
    localStorage.setItem('loginStatus', 'user');
    expect(component.isLoggedAsUser()).toBe(true);

    localStorage.setItem('loginStatus', 'guest');
    expect(component.isLoggedAsUser()).toBe(false);
  });

  it('should set the movie name and theatre and navigate to the bookticket route', () => {
    const movieName = 'Movie 1';
    const movieTheatre = 'Theatre 1';
    spyOn(component.router, 'navigate');

    component.booktickets(movieName, movieTheatre);

    expect(component.movieService.setMovieName).toHaveBeenCalledWith(movieName);
    expect(component.movieService.setMovieTheatre).toHaveBeenCalledWith(movieTheatre);
    expect(component.router.navigate).toHaveBeenCalledWith(['/bookticket']);
  });

  it('should set the logged in as guest flag if login status is guest', () => {
    localStorage.setItem('loginStatus', 'guest');
    fixture.detectChanges();

    expect(component.loggedInAsGuest).toBe(true);
  });
});
