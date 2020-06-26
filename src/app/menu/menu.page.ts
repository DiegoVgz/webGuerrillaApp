import { Component, OnInit } from "@angular/core";
import { MenuController, AlertController } from "@ionic/angular";
import { Router, RouterEvent } from "@angular/router";
import { RestService } from "../services/rest.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  public offense = true;
  public defense = false;
  public actual = "Offense";
  public username: any;
  public logout: any;
  public myMoney: any;
  public myPeople: any;
  public myOil: any;
  public myTank: any;
  public myEngineer: any;
  public myBunker: any;
  public myAssault: any;
  public countdown = 1;
  public tankToBuy = 0;
  public engineerToBuy = 0;
  public assaultToBuy = 0;
  public bunkerToBuy = 0;

  public timer = 60;

  public m = 1;
  pages = [

    {
      title: "ranking",
      url: "/menu/ranking",
    },
    {
      title: "connect",
      url: "/menu/connect",
    },

  ];

  selectedPath = "";
  constructor(
    public menu: MenuController,
    public router: Router,
    public rest: RestService,
    public storage: Storage,
    public alertController: AlertController
  ) {
    this.start();
    this.showData();
  }

  async ngOnInit() {
    this.offense = true;
 
  }

  public async showData() {
    if ((await this.rest.getCurrentUser()) == null) {
      this.goOut();
    } else {
      this.username = await this.rest.getCurrentUser();

      this.rest.getUserData(this.username).subscribe((data) => {
        this.myMoney = data[0].resources.money;
        this.myPeople = data[0].resources.people;
        this.myOil = data[0].resources.oil;
        this.myBunker = data[0].buildings.bunker;
        this.myAssault = data[0].army.assault;
        this.myEngineer = data[0].army.engineer;
        this.myTank = data[0].army.tank;
      });
    }
  }

  showOffense() {
    this.defense = false;
    this.offense = true;
    this.actual = "Offense";
  }

  showDefense() {
    this.offense = false;
    this.defense = true;
    this.actual = "Defense";
  }

  openEnd() {
    this.menu.close("start");
    this.menu.enable(true, "start");
    this.menu.open("start");
    this.menu.close("start");
  }

  goToRanking() {
    this.router.navigate(["/ranking"]);
  }

  goToSettings() {
    this.router.navigate(["/connect"]);
  }

  goToMenu() {
    this.router.navigate(["/menu"]);
  }

  async goOut() {
    this.logout = await this.rest.logout();
    this.router.navigate([""]);
  }

  start() {
    var IntervalVar = setInterval(
      function () {
        this.timer--;

        if (this.timer === 0) {
          this.timer = 60;

          this.m -= 1;
        }

        if (this.m === 0) {
          this.timer = 60;
          this.m = 1;
          this.showData();
        }
      }.bind(this),
      1000
    );
  }

  buyTank() {
    this.tankToBuy++;
  }

  buyEngineer() {
    this.engineerToBuy++;
  }

  buyBunker() {
    this.bunkerToBuy++;
  }

  buyAssault() {
    this.assaultToBuy++;
  }

  buy() {
    var data = {
      army: {
        assault: this.assaultToBuy,
        engineer: this.engineerToBuy,
        tank: this.tankToBuy,
      },
      buildings: {
        bunker: this.tankToBuy,
      },
    };

    this.rest.buyUnits(data).subscribe((data) => {
      if (JSON.stringify(data) == '{"402":"Non-sufficient funds"}') {
        this.presentAlert();
      } else {
        this.myMoney = data[0].resources.money;
        this.myPeople = data[0].resources.people;
        this.myOil = data[0].resources.oli;
        this.myBunker = data[0].buildings.bunker;
        this.myAssault = data[0].army.assault;
        this.myEngineer = data[0].army.engineer;
        this.myTank = data[0].army.tank;
        this.tankToBuy = 0;
        this.assaultToBuy = 0;
        this.bunkerToBuy = 0;
        this.engineerToBuy = 0;
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Alert",
      subHeader: "Non-sufficient funds",
      message: "",
      buttons: ["OK"],
    });

    await alert.present();
  }

  async alertToBuy() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Are you sure to buy : ",
      message:
        "<strong>" +
        "<ion-item>Tanks: " +
        this.tankToBuy +
        "</ion-item>" +
        "<ion-item>Engineers: " +
        this.engineerToBuy +
        "</ion-item>" +
        "<ion-item>Assault: " +
        this.assaultToBuy +
        "</ion-item>" +
        "<ion-item>Bunkers: " +
        this.bunkerToBuy +
        " </ion-item>" +
        "</strong>",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Okay",
          handler: () => {
            this.buy();
          },
        },
      ],
    });

    await alert.present();
  }
}
