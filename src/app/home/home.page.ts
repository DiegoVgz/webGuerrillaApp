import { Component, Input,ViewChild, ElementRef ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { DOCUMENT } from '@angular/common';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  public player:any;
  
  userData='';
  logout:any


  constructor(private router:Router, public rest:RestService,@Inject(DOCUMENT) document,public alertController: AlertController) {
   

  }

  ngOnInit() {


  }

  goToRegister(){
    this.router.navigate(['/register']);
  }

  goToMenu(){
    this.router.navigate(['/menu']);
  }


  login1(){

 var userData=(<HTMLInputElement>document.getElementById("email")).value;
    if(userData!=''){
      var user={
        "name":'null',
        "email":userData,
        "faction":'null'
      }
      this.rest.login(user).subscribe((data) =>{


        console.log(data);
      
        if(JSON.stringify(data)=='{"400":"Bad request"}'){


          
          this.rest.setUser(userData);
          this.goToRegister();
      

        }else{

          this.rest.setUser(data.name);
          this.goToMenu();
        }
      
  
      });
  
    }else{
      this.presentAlert();
    }

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Alert",
      subHeader: "Insert email please",
      message: "",
      buttons: ["OK"],
    });

    await alert.present();
  }
}

