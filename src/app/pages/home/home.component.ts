import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ImoveisService } from 'src/app/shared/service/imoveis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 imoveis:Array<any> = new Array

  constructor(
    private rest_imoveis:ImoveisService,
  ) { }

  consultaImoveis() {
    this.rest_imoveis.getImoveis().subscribe((data:any) => {
     this.imoveis = data
     console.log(this.imoveis)
    })
  }
  ngOnInit(): void {
    this.consultaImoveis()
  }

}
