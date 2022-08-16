/*********************************************************************************
* WEB422 – Assignment 5
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: _Tanishq Talreja Student ID: 126460203 Date: 08-16-22
*
99912bf876dc4350b5fdbb7938521e7e
Client Secret cd91852814764c32963955d49730203b
********************************************************************************/ 
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { MusicDataService } from '../music-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: any;
  Sub: Subscription = new Subscription
  
  constructor(private MDS: MusicDataService, private route: ActivatedRoute, private MSB: MatSnackBar) { }

  ngOnInit(): void {
    this.Sub = this.route.params.subscribe(params => {
      this.MDS.getAlbumById(params['id']).subscribe(data => this.album = data)
    })
  }
  

  addToFavourites(trackID: any) {
    if (this.MDS.addToFavourites(trackID)) {
      this.MSB.open("ADDED TO YOUR LIST BUD!!!", "Done", { duration: 1000 })
    }
  }

  ngOnDestroy(): void {
    this.Sub.unsubscribe();
  }

}
