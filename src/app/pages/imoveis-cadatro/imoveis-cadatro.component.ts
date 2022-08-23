import { Component, OnInit } from '@angular/core';
import { ImoveisService } from 'src/app/shared/service/imoveis.service';
import { LoaderService } from 'src/app/shared/service/loader.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-imoveis-cadatro',
  templateUrl: './imoveis-cadatro.component.html',
  styleUrls: ['./imoveis-cadatro.component.css']
})
export class ImoveisCadatroComponent implements OnInit {

  cep:number
  rua:string = ''
  bairro:string =''
  uf:string = ''
  cidade:string =''
  redirect:boolean = false
  constructor(private rest_imoveis:ImoveisService,
    private load:LoaderService,
    private router:Router) { }

  getcep(cep) {
    this.load.show()
      console.log(this.load)
      this.rest_imoveis.getCep(cep).subscribe((data) => {
      this.rua = data.logradouro
      this.uf = data.uf
      this.bairro = data.bairro
      this.cidade = data.localidade
      console.log(cep)
      this.load.hide()
    })
    
  }
  conos(){
    Swal.fire(
      'Parabéns pessoal da Brunsker ^^!',
      'A casa é sua (Me passa para a proxima fase ai vai rs........)!',
      'success'
    ).then(() =>{
      this.redirect = true
    })
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
    
  }

}
