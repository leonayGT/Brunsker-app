import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private serie:ApiService) { }

  series:any 

  getSeries() {
    this.series = this.serie.getAllSeries()
  }
  ngOnInit(): void {
    this.getSeries()
  }

}
