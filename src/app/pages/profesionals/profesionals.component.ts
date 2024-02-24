import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profesional } from 'src/app/model/profesional';
import { Response } from 'src/app/model/response';
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
    this.profesional = new Profesional(null, null, null, null, null, null, null, null, null);
  }

  public onShow(form: NgForm){
    this.profesional = form.form.value;
    if(this.profesional.name && this.profesional.lastName) {
      this.myProfesionalService.getOne(this.profesional.name, this.profesional.lastName)
      .subscribe((resp: Response) => {
        console.log(resp);
        if(!resp.err){
          this.profesionals = resp.data;
          this.toast.success('Se ha encontrado el profesional', "",
                            {timeOut: 2000, positionClass: "toast-top-center"});
        } else {
          this.myProfesionalService.getAll()
          .subscribe((resp: Response) => {
            console.log(resp);
            this.profesionals = resp.data;
          })
          this.toast.error('Profesional no encontrado', "", 
                    {timeOut: 2000, positionClass: 'toast-top-center'});
        }
      })
    } else {
      this.myProfesionalService.getAll()
      .subscribe((resp: Response) => {
        console.log(resp);
        if(!resp.err){
          this.profesionals = resp.data; 
          this.toast.success('Todos los profesionales', "",
                            {timeOut:2000, positionClass: "toast-top-center"});
        }else{
          this.toast.error('Profesionales no encontrados', "", 
                    {timeOut: 2000, positionClass: 'toast-top-center'});
        } 
      })
    }
  }

  public onCreate(form: NgForm){
    this.profesional = form.form.value;
    this.myProfesionalService.add(this.profesional)
    .subscribe((resp: Response) => {
      console.log(resp);
      if(!resp.err){
        this.toast.success('Profesional insertado correctamente', "",
                        {timeOut:2000, positionClass: "toast-top-center"});
        this.myProfesionalService.getAll()
        .subscribe((resp: Response) => {
          console.log(resp);
          this.profesionals = resp.data;
        })
      } else {
        this.toast.error('No se ha podido crear el profesional', "", 
                    {timeOut: 2000, positionClass: 'toast-top-center'});
      }
      
    })
  }

  public onUpdate(form: NgForm){
    this.profesional = form.form.value;
    this.myProfesionalService.edit(this.profesional)
    .subscribe((resp: Response) => {
      console.log(resp);
      if(!resp.err){
        this.toast.success('Profesional modificado correctamente', "",
                          {timeOut:2000, positionClass: "toast-top-center"});
        this.myProfesionalService.getAll()
        .subscribe((resp: Response) => {
        console.log(resp);
        this.profesionals = resp.data;
        })
      } else {
        this.toast.error('No se ha podido modificar el profesional', "", 
                    {timeOut: 2000, positionClass: 'toast-top-center'});
      }
    })
    
  }

  public onDelete(form: NgForm){
    this.profesional = form.form.value;
    this.myProfesionalService.delete(this.profesional)
    .subscribe((resp: Response) => {
      console.log(resp);
      if(!resp.err){
        this.toast.success('Profesional eliminado correctamente', "",
                          {timeOut:2000, positionClass: "toast-top-center"});
        this.myProfesionalService.getAll()
        .subscribe((resp: Response) => {
        console.log(resp);
        this.profesionals = resp.data;
        })
      } else {
        this.toast.error('No se ha podido eliminar el profesional', "", 
                    {timeOut: 2000, positionClass: 'toast-top-center'});
      }
    })
    
  }

  ngOnInit(): void {
    
  }
}
