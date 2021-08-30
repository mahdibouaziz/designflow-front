import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';
//import { Data } from '../model/data'



@Injectable()
export class itemService  {
  constructor(private http: HttpClient) {
  }

  getAllItem(){
    return this.http.get('http://localhost:5000/customers')
  }

  filter(data){
    return this.http.post('http://localhost:5000/filter' , data)
  }
  
  Table_Headers_Key(){
    return this.http.get('http://localhost:5000/viewlayout' )
  }


  


}
