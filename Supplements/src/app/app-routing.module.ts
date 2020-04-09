import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SupplementsComponent } from './supplements/supplements.component';
import { ScienceComponent } from './science/science.component';
import { MyplanComponent } from './myplan/myplan.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'supplements', component: SupplementsComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'myplan', component: MyplanComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
