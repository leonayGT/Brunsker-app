import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input() label:string
  @Input() type:string
  @Input() class:string
  @Input() id:string
  @Input() valor:string
  @Input() model:any
  constructor() { }

  ngOnInit(): void {
  }

}
