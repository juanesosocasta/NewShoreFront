import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { formModel } from './models/form-model';
import { newShoreModel } from './models/newShore-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  captcha: string = "";
  xd: string = "invalid";
  hide: boolean = true;
  checkToken: any;

  constructor(
    private fb: FormBuilder,
    private conect: newShoreModel,
  ) { }

  ngOnInit(): void {
    this.CreateForm();

  }

  CreateForm() {
    this.form = this.fb.group({
      Origin: [" ",
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(3),
      ],
      Destination: [" ",
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(3),

      ],

    });
  }

  get GetForm() {
    return this.form.controls;
  }

  /* openDialog() {
    this.dialog.open(InfoComponent);
  } */
  sendSerch(){
    let origin=this.GetForm['origin'].value;
    let destination=this.GetForm['destination'].value;
    let model= new formModel();

    model.origin=origin;
    model.destination=destination
   

}

}
