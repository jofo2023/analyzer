import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AuthService } from './auth/auth.service';
import { TrainingService } from './training/training.service';

import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { UIservice } from './shared/ui.service';
import { AuthModule } from './auth/auth.module';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AuthModule,
    AngularFirestoreModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [AuthService, TrainingService, UIservice],
  bootstrap: [AppComponent],
})
export class AppModule { }
