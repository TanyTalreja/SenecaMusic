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
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  results: any;
  find: string = "";
  Sub: Subscription = new Subscription;

  constructor(private route: ActivatedRoute, private MDS: MusicDataService) { }

  ngOnInit(): void {
    
    this.Sub = this.route.queryParams.subscribe(params => {
      this.find = params['q']

      this.MDS.searchArtists(this.find).subscribe(data => {
        this.results = data.artists.items.filter(item => item.images.length > 0)
      })
    })
    
  }

  ngOnDestroy(): void {
    this.Sub.unsubscribe();
  }
}
