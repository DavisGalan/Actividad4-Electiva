import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private peticion:PeticionService) { }

  ngOnInit(): void {  
 
  }

  ocultar:string = ''

    logout(){
      localStorage.setItem('inicio','0')
      this.ocultar = '0'
    }
  

  }





