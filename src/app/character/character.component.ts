import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private charactersSVC:ApiService) { }
  public characters:any

  getCharaters() {
    this.characters = this.charactersSVC.getAllCharacters()
  }
  ngOnInit(): void {
    this.getCharaters()
  }

}
