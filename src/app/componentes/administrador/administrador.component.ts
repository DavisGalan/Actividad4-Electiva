import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { PeticionService } from 'src/app/servicios/peticion.service';


declare var $:any
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  // @Input() tarjeta: Tarjeta;
  // @Input() listaTarjetas: Tarjeta[];





  constructor(private peticion:PeticionService, private msg:MensajeriaService) { }

  ngOnInit(): void {
  }



}
