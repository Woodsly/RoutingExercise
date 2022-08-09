import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetialsComponent } from './movie-detials/movie-detials.component';

const routes: Routes = [
  {path: 'MovieList', component: MovieListComponent},
  {path: 'MovieDetails/:id', component: MovieDetialsComponent},
  {path: '', redirectTo:'/MovieList', pathMatch:'full'},
  {path: '**', redirectTo:'/MovieList', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetialsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
