import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegisterViewComponent } from './components/register-view/register-view.component';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButton, MatButtonModule, MatFabButton, MatIconButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatLabel} from "@angular/material/form-field";
import { LoginViewComponent } from './components/login-view/login-view.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import { ServicesContentComponent } from './components/services-content/services-content.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {MatToolbar} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    RegisterViewComponent,
    LoginViewComponent,
    HomeContentComponent,
    ServicesContentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormField,
    MatInput,
    MatIcon,
    MatIconModule,
    MatIconButton,
    MatCheckbox,
    MatSlideToggle,
    MatButton,
    MatButtonModule,
    MatLabel,
    MatCard,
    MatCardModule,
    MatCardContent,
    MatFabButton,
    MatCardActions,
    MatCardTitle,
    MatCardSubtitle,
    MatToolbar,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
