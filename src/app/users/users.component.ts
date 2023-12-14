import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  data:any;
  constructor(private api:RegisterService,private route:Router){}

  ngOnInit(): void {
    let id=localStorage.getItem("id");
    this.api.getuserid(id).subscribe((res:any)=>{
      this.data=res;
      
    });
    

  
  }

}

