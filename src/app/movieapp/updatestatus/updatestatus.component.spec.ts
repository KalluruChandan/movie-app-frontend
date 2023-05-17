import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestatusComponent } from './updatestatus.component';
import { HttpClient,HttpClientModule,HttpHandler } from '@angular/common/http';
import { MovieService } from 'src/app/movie.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AllmoviesComponent } from '../allmovies/allmovies.component';
import { BookingsComponent } from '../bookings/bookings.component';
import { BookticketComponent } from '../bookticket/bookticket.component';
import { DeletemovieComponent } from '../deletemovie/deletemovie.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { PracticeComponent } from '../practice/practice.component';
import { RegisterComponent } from '../register/register.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';
import { SearchmovieComponent } from '../searchmovie/searchmovie.component';

describe('UpdatestatusComponent', () => {
  let component: UpdatestatusComponent;
  let fixture: ComponentFixture<UpdatestatusComponent>;

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

    fixture = TestBed.createComponent(UpdatestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
