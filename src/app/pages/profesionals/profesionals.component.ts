import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profesional } from 'src/app/model/profesional';
import { ProfesionalService } from 'src/app/shared/profesional.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profesionals',
  templateUrl: './profesionals.component.html',
  styleUrls: ['./profesionals.component.css']
})

export class ProfesionalsComponent implements OnInit {
 
  public profesionals: Profesional[]=[];
  public profesional: Profesional; 

  constructor(public myProfesionalService: ProfesionalService, 
            private toast: ToastrService){
    // this.profesional = new Profesional(null, null, null, null, null, null, null, null, null);
  }

  public onShow(form: NgForm){
    this.profesional = form.form.value;
    if(this.profesional.name && this.profesional.last_name) {
      console.log("Mostrar un professional");
    } else {
      console.log("Mostrar tots els professionals");
    }
    console.log(form.form.value);
    console.log(this.profesional);
  }

  public onCreate(form: NgForm){
    console.log(form.form.value);
    console.log(this.profesional);
  }

  public onUpdate(form: NgForm){
    console.log(form.form.value);
    console.log(this.profesional);
  }

  public onDelete(form: NgForm){
    console.log(form.form.value);
    console.log(this.profesional);
  }

  ngOnInit(): void {
    
  }
}
