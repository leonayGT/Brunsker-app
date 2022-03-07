import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CharacterComponent } from './character/character.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { HomeComponent } from './home/home.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharacterComponent,
    ComicsComponent,
    SeriesComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
