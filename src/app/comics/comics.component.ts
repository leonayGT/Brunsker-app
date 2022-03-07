import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comics:ApiService) { }
  allComics: any

  getComics():any {
    this.allComics = this.comics.getAllComics()
  }

  ngOnInit(): void {
    this.getComics()
  }

}
