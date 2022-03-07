import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './../series/series.component';
import { HomeComponent } from './../home/home.component';
import { ComicsComponent } from './../comics/comics.component';
import { CharacterComponent } from './../character/character.component';

const routes: Routes = [
  { 
    path: '',
     component: HomeComponent
  },
  { 
    path: 'character',
     component: CharacterComponent 
   },
  { 
    path: 'series',
   component: SeriesComponent
  },
  { 
    path: 'comics',
   component: ComicsComponent 
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
