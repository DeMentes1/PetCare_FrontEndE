import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from "./components/home-content/home-content.component";
import {LoginViewComponent} from "./components/login-view/login-view.component";
import {RegisterViewComponent} from "./components/register-view/register-view.component";
import {ServicesContentComponent} from "./components/services-content/services-content.component";
import {VeterinaryContentComponent} from "./components/veterinary-content/veterinary-content.component";
import {SupportContentComponent} from "./components/support-content/support-content.component";
import {BookingContentComponent} from "./components/booking-content/booking-content.component";

const routes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: 'booking', component: BookingContentComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'signup', component: RegisterViewComponent },
  { path: 'services', component: ServicesContentComponent },
  { path: 'veterinary', component: VeterinaryContentComponent },
  { path: 'contact-us', component: SupportContentComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
