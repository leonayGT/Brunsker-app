import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading = new Subject<boolean>(); 

  constructor() { }

  show(){
    //console.log('Loading start');
    this.isLoading.next(true);
  }
  hide(){
    //console.log('Loading end');
    this.isLoading.next(false);
  }
}
