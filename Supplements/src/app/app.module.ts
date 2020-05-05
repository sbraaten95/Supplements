import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthInterceptor } from './auth.interceptor';

import { HomeComponent } from './home/home.component';
import { SupplementsComponent } from './supplements/supplements.component';
import { ScienceComponent } from './science/science.component';
import { MyplanComponent } from './myplan/myplan.component';
import { ProfileComponent } from './profile/profile.component';
import { SetupComponent } from './setup/setup.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

import { UserService } from './users.service';
import { LoginComponent } from './login/login.component';
import { SupplementComponent } from './supplement/supplement.component';
import { NervousSystemComponent } from './nervous-system/nervous-system.component';
import { CardiorespiratorySystemComponent } from './cardiorespiratory-system/cardiorespiratory-system.component';
import { DigestiveSystemComponent } from './digestive-system/digestive-system.component';
import { ImmuneSystemComponent } from './immune-system/immune-system.component';
import { MuscularSystemComponent } from './muscular-system/muscular-system.component';
import { ResultsComponent } from './results/results.component';
import { AminoAcidsComponent } from './amino-acids/amino-acids.component';
import { HerbalsComponent } from './herbals/herbals.component';
import { VitaminsComponent } from './vitamins/vitamins.component';
import { NootropicsComponent } from './nootropics/nootropics.component';
import { MineralsComponent } from './minerals/minerals.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SupplementsComponent,
    ScienceComponent,
    MyplanComponent,
    ProfileComponent,
    SetupComponent,
    QuestionnaireComponent,
    LoginComponent,
    SupplementComponent,
    NervousSystemComponent,
    CardiorespiratorySystemComponent,
    DigestiveSystemComponent,
    ImmuneSystemComponent,
    MuscularSystemComponent,
    ResultsComponent,
    AminoAcidsComponent,
    HerbalsComponent,
    VitaminsComponent,
    NootropicsComponent,
    MineralsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
