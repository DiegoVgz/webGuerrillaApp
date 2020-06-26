import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router:Router,public rest:RestService) {}

  username:any;
  email:any

  goToLogin(){
    this.router.navigateByUrl('/home');
  }

  async ngOnInit() {

    
    this.username = await this.rest.getCurrentUser();

    if(this.username=''){
      (<HTMLInputElement>document.getElementById("emailRegister")).setAttribute('value','');;
    }else{
      (<HTMLInputElement>document.getElementById("emailRegister")).setAttribute('value',this.username);;
    }
 
 
  }

  login(){

    var userEmail=(<HTMLInputElement>document.getElementById("emailRegister")).value;
    var userName=(<HTMLInputElement>document.getElementById("nameRegister")).value;
    var userFaction=(<HTMLInputElement>document.getElementById("factionRegister")).value;

       if(userEmail!='' && userName!='' && userFaction!=''){
         var user={
           "name":userName,
           "email":userEmail,
           "faction":userFaction
         }
         this.rest.login(user).subscribe((data) =>{
   
   
           console.log(data[0]);

           if(JSON.stringify(data)=='{"400":"Bad request"}'){
   
   
             alert('Something went wrong try againt please');
         
   
           }else{
   
             this.rest.setUser(data[0].name);
             this.goToMenu();

           }
         
     
         });
     
       }else{
         alert("Insert email please");
       }
   
     }

     goToRegister(){
      this.router.navigate(['/register']);
    }
  
    goToMenu(){
      this.router.navigate(['/menu']);
    }

}
