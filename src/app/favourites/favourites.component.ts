/*********************************************************************************
* WEB422 – Assignment 4
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: _Tanishq Talreja Student ID: 126460203 Date: 07-28-22
*
99912bf876dc4350b5fdbb7938521e7e
Client Secret cd91852814764c32963955d49730203b
********************************************************************************/ 
import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private Bar: MatSnackBar, private MDS: MusicDataService) { }

  favourites: Array<any> = [];
  favouritesSub: Subscription = new Subscription;

  ngOnInit(): void {
    this.favouritesSub = this.MDS.getFavourites().subscribe( data => {
      this.favourites = data.tracks;
    })
    console.log(this.favourites)
  }

  removeFromFavourites(id: any) {
    this.MDS.removeFromFavourites(id).subscribe( data => {
      this.favourites = data.tracks;
      this.Bar.open("DID'T LIKE IT?SAY BYEEE!!!!", "Done", { duration: 1500 });
    });
  }

  ngOnDestroy(): void {
    this.favouritesSub.unsubscribe();
  }
}
