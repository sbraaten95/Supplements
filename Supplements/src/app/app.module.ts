import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { OktaAuthModule } from '@okta/okta-angular';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SupplementsComponent } from './supplements/supplements.component';
import { ScienceComponent } from './science/science.component';
import { MyplanComponent } from './myplan/myplan.component';
import { ProfileComponent } from './profile/profile.component';
import { SetupComponent } from './setup/setup.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    OktaAuthModule.initAuth({
      issuer: 'https://dev-610733.okta.com/oauth2/default',
      redirectUri: 'http://localhost:4200/implicit/callback',
      clientId: '0oa5lx6wsKwgrCxZa4x6',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
