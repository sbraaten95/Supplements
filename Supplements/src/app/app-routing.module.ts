import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SupplementsComponent } from './supplements/supplements.component';
import { SupplementComponent } from './supplement/supplement.component';
import { ScienceComponent } from './science/science.component';
import { MyplanComponent } from './myplan/myplan.component';
import { ProfileComponent } from './profile/profile.component';
import { SetupComponent } from './setup/setup.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';
import { NervousSystemComponent } from './nervous-system/nervous-system.component';
import { CardiorespiratorySystemComponent } from './cardiorespiratory-system/cardiorespiratory-system.component';
import { DigestiveSystemComponent } from './digestive-system/digestive-system.component';
import { ImmuneSystemComponent } from './immune-system/immune-system.component';
import { MuscularSystemComponent } from './muscular-system/muscular-system.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'supplements', component: SupplementsComponent },
  { path: 'supplements/:id', component: SupplementComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'myplan', component: MyplanComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'nervous_system', component: NervousSystemComponent },
  {
    path: 'cardiorespiratory_system',
    component: CardiorespiratorySystemComponent,
  },
  { path: 'digestive_system', component: DigestiveSystemComponent },
  { path: 'immune_system', component: ImmuneSystemComponent },
  { path: 'muscular_system', component: MuscularSystemComponent },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
