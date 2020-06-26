import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {

 public  ip:any;
  constructor(private menu: MenuController,private router:Router,private rest: RestService,public alertController: AlertController) { }

  ngOnInit() {
  }

  openEnd() {
    this.menu.close('start');
    this.menu.enable(true, 'start');
    this.menu.open('start');
    this.menu.close('start');
  }

  goToRanking(){
    this.router.navigate(['/ranking']);
  }

  goToSettings(){
    this.router.navigate(['/connect']);
  }

  goToMenu(){
    this.router.navigate(['/menu']);
  }

  goOut(){
    this.router.navigate(['']);
  }

  async connect(){

    this.ip=(<HTMLInputElement>document.getElementById("ip")).value;
    var test = await this.rest.setEndPoint(this.ip);
    this.presentAlert();

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Sucessful",
      subHeader: "New connection to : "+this.ip,
      message: "",
      buttons: ["OK"],
    });

    await alert.present();
}
}
