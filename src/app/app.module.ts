import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ButtonModule } from 'primeng/button';

import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { environment } from '../environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {GojsAngularModule} from "gojs-angular";
import {RoadmapComponent} from "./roadmap/roadmap.component";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    SignUpComponent,
    SignUpComponent,
    RoadmapComponent
  ],
  imports: [
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    UserModule,
    ComponentsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    DropdownModule,
    ListboxModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    GojsAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
