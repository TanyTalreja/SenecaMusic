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
import { Subscription } from 'rxjs';
import { MusicDataService } from '../music-data.service';


@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {
  constructor(private MDS: MusicDataService,) { }

  releases: Array<any> = [];
  Sub: Subscription = new Subscription;

  ngOnInit(): void {
    this.Sub = this.MDS.getNewReleases().subscribe(data => {
      this.releases = data.albums.items;
    })
    console.log(this.releases)
  }

  ngOnDestroy(): void {
    this.Sub.unsubscribe();
  }

}
