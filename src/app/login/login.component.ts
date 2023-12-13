import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Loginform!: FormGroup;

  user: any;
  constructor(private form: FormBuilder, private api: RegisterService, private route: Router) {

  }
  ngOnInit(): void {
    this.Loginform = this.form.group({
      mobileno: [''],
      password: [""],
    })
  }
  getUsers() {
    this.api.getData(this.Loginform.value).subscribe((res: any) => {
      console.log(res, 'logincheck');
     localStorage.setItem("id",res._id)
        this.route.navigate(['/home'])
     } )


  }
   

}
