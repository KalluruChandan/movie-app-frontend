import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClient,HttpClientModule,HttpHandler } from '@angular/common/http';
import { MovieService } from 'src/app/movie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AllmoviesComponent } from '../allmovies/allmovies.component';
import { BookingsComponent } from '../bookings/bookings.component';
import { BookticketComponent } from '../bookticket/bookticket.component';
import { DeletemovieComponent } from '../deletemovie/deletemovie.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { PracticeComponent } from '../practice/practice.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';
import { SearchmovieComponent } from '../searchmovie/searchmovie.component';
import { UpdatestatusComponent } from '../updatestatus/updatestatus.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

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
      providers:[MovieService,HttpClient,HttpHandler,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
