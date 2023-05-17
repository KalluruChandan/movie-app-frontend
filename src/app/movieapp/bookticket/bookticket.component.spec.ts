import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookticketComponent } from './bookticket.component';
import { HttpClient,HttpClientModule,HttpHandler } from '@angular/common/http';
import { MovieService } from 'src/app/movie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AllmoviesComponent } from '../allmovies/allmovies.component';
import { BookingsComponent } from '../bookings/bookings.component';
import { DeletemovieComponent } from '../deletemovie/deletemovie.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { PracticeComponent } from '../practice/practice.component';
import { RegisterComponent } from '../register/register.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';
import { SearchmovieComponent } from '../searchmovie/searchmovie.component';
import { UpdatestatusComponent } from '../updatestatus/updatestatus.component';

describe('BookticketComponent', () => {
  let component: BookticketComponent;
  let fixture: ComponentFixture<BookticketComponent>;
  let array : string[] = ['a1', 'a2', 'a3', 'a4', 'a1'];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PracticeComponent,
        LoginComponent,
        HomeComponent,
        RegisterComponent,
        BookingsComponent,
        BookticketComponent,
        AllmoviesComponent,
        ResetpasswordComponent,
        DeletemovieComponent,
        UpdatestatusComponent,
        SearchmovieComponent
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
});
