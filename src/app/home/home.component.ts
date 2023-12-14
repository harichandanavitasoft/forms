import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  implements OnInit{
  Editform!:FormGroup
 apidata : any;
 value:any;
 
  updateData: any;

  constructor(private api:RegisterService, private data:FormBuilder,private route:Router){}
  ngOnInit(): void {
    let username = localStorage.getItem('id');
    console.log(username,'uname');
     this.api.getusers().subscribe((res:any)=>{
      console.log(res);
      this.apidata=res.filter((u:any) => u._id != username)

    });

    this.Editform=this.data.group({
      name : ["ffff"],

      username:[''],
      mobileno : [''],
      email:[""],
      password:[""],
      qualification :[""],
      gender:[""],
      address :[""],
      id:[""]

    });
    
  }



  deleteuser(id:any){
    this.api.delete(id).subscribe((res: any )=>{
      console.log(res);
      window.location.reload();
 });

  }
  edituser(d:any){
    this.Editform.patchValue({
      name : d.name,
      username:d.username,
      mobileno : d.mobileno,
      email:d.email,
      password:d.password,
      qualification :d.qualification,
      gender: d.gender,
      address: d.address,
      id:d._id,


    });


  }
  update(){
    console.log(this.Editform.value,"check");
    this.api.edituser(this.Editform.value).subscribe((res:any)=>{
      window.location.reload();

    })
  }
  getid(){
      let id = localStorage.getItem("id")
      this.api.getuserid(id).subscribe((res:any)=>{
        console.log(res,'checking');
        this.route.navigate(['/users'])
        
      })
    }

  }





