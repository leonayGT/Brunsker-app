import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private filtro:ApiService) { }

  ngOnInit(): void {
  }

}
