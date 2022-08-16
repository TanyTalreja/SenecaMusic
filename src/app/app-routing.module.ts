/*********************************************************************************
* WEB422 – Assignment 3
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: _Tanishq Talreja Student ID: 126460203 Date: 07-08-22
*
********************************************************************************/ 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { GuardAuthService } from './guard-auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: "", redirectTo: "/newReleases", pathMatch: "full" },
  { path: "newReleases", component: NewReleasesComponent, canActivate: [GuardAuthService]},
  { path: "album/:id", component: AlbumComponent,canActivate: [GuardAuthService] },
  { path: "about", component: AboutComponent,canActivate: [GuardAuthService] },
  {path: "artist/:id", component: ArtistComponent,canActivate: [GuardAuthService] },
  {path: "search", component: SearchResultComponent,canActivate: [GuardAuthService]},
  {path: "favourites", component: FavouritesComponent,canActivate: [GuardAuthService]},
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: NotFoundComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
