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
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MusicDataService } from '../music-data.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  albums: Array<any> = []
  artist: any;
  Sub: Subscription = new Subscription;

  constructor(private MDS: MusicDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Sub = this.route.params.subscribe(params => {

      this.MDS.getArtistById(params['id']).subscribe(data => {
        this.artist = data;
      });

      this.MDS.getAlbumsByArtistId(params['id']).subscribe(data => {
        this.albums = data.items.filter((item, index) =>
          data.items.findIndex((item2) =>
            item2.name.toUpperCase() === item.name.toUpperCase()) === index);
      });

    });
  }

  ngOnDestroy(): void {
    this.Sub.unsubscribe();
  }

}
