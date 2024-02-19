import { PersonaService } from './../servicios/persona.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  mgs:any;
  constructor( private personaService:PersonaService) {}
  registeruser(name:any, apellido:any, cedula:any, email:any, telefono:any, especialidad:any,tipoid:any) {

    this.personaService.savetipo(name.value, apellido.value, cedula.value, email.value,telefono.value, especialidad.value,tipoid.value).subscribe({
      next:(data:any)=>{
      this.mgs=data.message
      },
      error:(err)=>{
        
      }
    })
  }
}
