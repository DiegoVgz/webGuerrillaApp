import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router:Router,public rest:RestService,public alertController:AlertController) {}

  username:any;
  email:any

  goToLogin(){
    this.router.navigateByUrl('/home');
  }

  async ngOnInit() {

    
    this.username = await this.rest.getCurrentUser();
    console.log(this.username);

    if(this.username==''){
      (<HTMLInputElement>document.getElementById("emailRegister")).setAttribute('value','');
    }else{
      (<HTMLInputElement>document.getElementById("emailRegister")).setAttribute('value',this.username);;
    }
 
 
  }

  login(){

    var userEmail=(<HTMLInputElement>document.getElementById("emailRegister")).value;
    var userName=(<HTMLInputElement>document.getElementById("nameRegister")).value;
    var userFaction=(<HTMLInputElement>document.getElementById("factionRegister")).value;



    

      var user2={
        "name":'null',
        "email":userEmail,
        "faction":'null'
      }
      this.rest.login(user2).subscribe((data) =>{

        if(JSON.stringify(data)=='{"400":"Bad request"}'){


          if(userEmail!='' && userName!='' && userFaction!=undefined){
            var user={
              "name":userName,
              "email":userEmail,
              "faction":userFaction
            }
            this.rest.login(user).subscribe((data) =>{
      
      
              console.log(data[0]);
   
              if(JSON.stringify(data)=='{"400":"Bad request"}'){
      
      
               
               this.presentAlert1();
      
              }else{
      
                this.rest.setUser(data[0].name);
                this.goToMenu();
   
              }
            
        
            });
        
          }else{
           this.presentAlert();
          }
      

        }else{

          
        this.rest.setUser(data.name);
        this.goToMenu();
   
        }

      }); 

      
     }

     goToRegister(){
      this.router.navigate(['/register']);
    }
  
    goToMenu(){
      this.router.navigate(['/menu']);
    }


    async presentAlert() {
      const alert = await this.alertController.create({
        cssClass: "my-custom-class",
        header: "Alert",
        subHeader: "Please insert all infomation required",
        message: "",
        buttons: ["OK"],
      });
  
      await alert.present();
    }

    async presentAlert1() {
      const alert = await this.alertController.create({
        cssClass: "my-custom-class",
        header: "Alert",
        subHeader: "Something went wrong try againt please",
        message: "",
        buttons: ["OK"],
      });
  
      await alert.present();
    }

}
