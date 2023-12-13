import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  subscribe() {
    throw new Error('Method not implemented.');
  }
  private getUrl ='http://localhost:3000'

  constructor( private http:HttpClient) { }
  getData(data:any){
    return this.http.post("http://localhost:3000/user/login",data);
  }
  
  postData(data : any){
    return this.http.post("http://localhost:3000/user/create",data);
  }
  getData1(){
    return this.http.get("http://localhost:3000/get/users")
  }
  delete(id:any){
    return this.http.delete("http://localhost:3000/user/deleteById/" + id)
  }
  edituser(data:any){
    return this.http.put("http://localhost:3000/user/updateById/"+data.id,data)
    
  }
  getuserid(id:any){
    return this.http.get("http://localhost:3000/user/getById/" +id)
  }
  
}
