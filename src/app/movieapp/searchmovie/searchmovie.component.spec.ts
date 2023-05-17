import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { MovieService } from 'src/app/movie.service';
import { SearchmovieComponent } from './searchmovie.component';
import { HttpClient,HttpHandler } from '@angular/common/http';

describe('SearchmovieComponent', () => {
  let component: SearchmovieComponent;
  let fixture: ComponentFixture<SearchmovieComponent>;
  let movieService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [SearchmovieComponent],
      providers: [MovieService, HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.searchForm.valid).toBeFalsy();
  });


  it('sholud return path', () => {
    expect(component.getMovieImagePath('Dasara')).toBe('../../../assets/images/movies/Dasara.jpg');
  })
});
