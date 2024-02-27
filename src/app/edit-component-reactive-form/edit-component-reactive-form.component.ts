import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-component-reactive-form',
  templateUrl: './edit-component-reactive-form.component.html',
  styleUrls: ['./edit-component-reactive-form.component.css']
})
export class EditComponentReactiveFormComponent implements OnInit{
  
  contactForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private router : Router) { }
  ngOnInit(): void {
      this.initForm();
  }

  initForm():void{
    this.contactForm = this.formBuilder.group({
      name : ['',Validators.required],
      email : ['', [Validators.required, Validators.email]],
      website : ['', Validators.required, Validators.pattern('https?://.+')],
      projects: ['', Validators.required],
    });
  }
onAddContact():void{
  console.log(this.contactForm.value);
}
onContacts():void{
  this.router.navigate(['/contacts']);
}


}
