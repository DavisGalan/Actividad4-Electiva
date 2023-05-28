import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeticionService } from 'src/app/servicios/peticion.service';


declare var swal:any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private peticion:PeticionService, private router:Router) { }
  // email:string = ""
  // password:string = ""
  // datos:any[] = []
  respuestaLogin:any
 
  ngOnInit(): void { 
   
  }


  
  }


