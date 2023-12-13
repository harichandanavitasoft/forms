import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
Registerform!: FormGroup;
constructor(private formBuilder: FormBuilder ,private api:RegisterService , private route:Router){
}
  ngOnInit(): void {
    this.Registerform= this.formBuilder.group({
       fullname : ["",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z\s]*")]],
       username :["",[Validators.required,Validators.pattern("[a-z]*")]],
       mobileno : ["",[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
       email:["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
       password:["",Validators.required],
       qualification :[""],
       gender:[""],
       address :[""]

    })

  }
  get name(){
    return this.Registerform.get('fullname');
  }
  get username(){
    return this.Registerform.get('username');
  }
  get mobileno(){
    return this.Registerform.get('mobileno')
  }
  get email(){
    return this.Registerform.get('email')
  }
  get password(){
    return this.Registerform.get('password')

  }
  addUsers(){
    console.log(this.Registerform.value);
    this.api.postData(this.Registerform.value).subscribe((res:any) =>{
      console.log(res);
this.route.navigate(['/login'])
    })
    
  }


}
