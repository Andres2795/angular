import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }
  savetipo(name:any,apellido:any, cedula:any, email:any, telefono:any, especialidad:any,tipoid:any){
    debugger
  return this.http.post('http://127.0.0.1:8000/api/persona',
  {
    nombre:name,
    apellido:apellido,
    cedula:cedula,
    email:email,
    telefono:telefono,
    especialidad:especialidad,
    tipoid:tipoid
  
  }
  );
}
}
