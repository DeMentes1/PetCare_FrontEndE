import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegisterViewComponent } from './components/register/register-view/register-view.component';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton, MatIconButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatLabel} from "@angular/material/form-field";
import { HomeContentComponent } from './components/home-content/home-content.component';
import {MatCard, MatCardContent, MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    RegisterViewComponent,
    HomeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormField,
    MatInput,
    MatIcon,
    MatIconButton,
    MatCheckbox,
    MatSlideToggle,
    MatButton,
    MatLabel,
    MatCard,
    MatCardModule,
    MatCardContent,
    MatFabButton
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
