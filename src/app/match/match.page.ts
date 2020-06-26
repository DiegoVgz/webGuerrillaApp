import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { subscribeOn } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

  
  public username : any;
  public enemy : any;

  //team 1 result
  public dit2 : any; 
  public lootcap1 : any; 
  //etiquetas de asalto 1 y 2 del team 1
  public asault_etiqueta1_t1 : any; 
  public asault_etiqueta2_t1 : any; 
  //etiquetas de ingeniero 1 y 2 del team 1
  public engieneer_etiqueta1_t1 : any; 
  public engieneer_etiqueta2_t1 : any; 
  //etiquetas de tanque 1 y 2 del team 1
  public tank_etiqueta1_t1 : any; 
  public tank_etiqueta2_t1 : any; 
  //etiquetas de bunker 1 y 2 del team 1
  public bunker_etiqueta1_t1 : any; 
  public bunker_etiqueta2_t1 : any; 
  //dinero y petroleo team 1 
  public money_team1 : any; 
  public oil_team1 : any; 

  //team 2 result
  public ait1 : any; 
  //etiquetas de asalto 1 y 2 del team 1
  public asault_etiqueta1_t2 : any; 
  public asault_etiqueta2_t2 : any; 
  //etiquetas de ingeniero 1 y 2 del team 1
  public engieneer_etiqueta1_t2 : any; 
  public engieneer_etiqueta2_t2 : any; 
  //etiquetas de tanque 1 y 2 del team 1
  public tank_etiqueta1_t2 : any; 
  public tank_etiqueta2_t2 : any; 
  //etiquetas de bunker 1 y 2 del team 1
  public bunker_etiqueta1_t2 : any; 
  public bunker_etiqueta2_t2 : any; 
  


  constructor(public rest:RestService, public router:Router) { }

    async ngOnInit() {

    this.enemy = await this.rest.getCurrentEnemy();  

    if(this.enemy!=''){

      this.username= await this.rest.getCurrentUser();
      //resultado ataque 
      this.rest.attack(this.username,this.enemy).subscribe(data=>{
  
        console.log(data);
        //DI TEAM 2 
        this.dit2 = data.guerrillas[0].DI_Team2;
        //LOOT CAP 
        this.lootcap1 = data.guerrillas[0].LootCap;
        //Troops
        this.asault_etiqueta1_t1 = data.results[1].army.assault;
        this.engieneer_etiqueta1_t1= data.results[1].army.engineer;
        this.tank_etiqueta1_t1 = data.results[1].army.tank;
        this.bunker_etiqueta1_t1 =data.results[1].buildings.bunker;
  
        this.asault_etiqueta2_t1 = data.guerrillas[1].army.assault * 0.5 + 
        data.guerrillas[1].army.engineer * 0.3 + data.guerrillas[1].army.tank * 5 + data.guerrillas[1].buildings.bunker * 5;
  
        this.engieneer_etiqueta2_t1 = data.guerrillas[1].army.assault * 0.8 + 
        data.guerrillas[1].army.engineer * 0.5 + data.guerrillas[1].army.tank * 5 + data.guerrillas[1].buildings.bunker * 5;
  
  
        this.tank_etiqueta2_t1 =data.guerrillas[1].army.assault * 0.1 + 
        data.guerrillas[1].army.engineer * 0.9 + data.guerrillas[1].army.tank * 0.6 + data.guerrillas[1].buildings.bunker * 0.9;
  
  
        this.bunker_etiqueta2_t1 = data.guerrillas[1].army.assault * 0.05 + 
        data.guerrillas[1].army.engineer * 0.9 + data.guerrillas[1].army.tank * 1 + data.guerrillas[1].buildings.bunker * 0;
  
  
  
        this.money_team1 =  data.results[0].resources.money;
        this.oil_team1 =  data.results[0].resources.oil;
  
  
        //AI TEAM 1
        this.ait1 = data.guerrillas[1].AI_Team1;
        //resultado efensa
        this.asault_etiqueta1_t2 = data.results[0].army.assault;
        this.engieneer_etiqueta1_t2= data.results[0].army.engineer;
        this.tank_etiqueta1_t2 = data.results[0].army.tank;
        this.bunker_etiqueta1_t2 =data.results[0].buildings.bunker;
  
        this.asault_etiqueta2_t2 = data.guerrillas[0].army.assault * 0.5 + 
        data.guerrillas[0].army.engineer * 0.3 + data.guerrillas[0].army.tank * 5 + data.guerrillas[0].buildings.bunker * 5;
  
        this.engieneer_etiqueta2_t2 = data.guerrillas[0].army.assault * 0.8 + 
        data.guerrillas[0].army.engineer * 0.5 + data.guerrillas[0].army.tank * 5 + data.guerrillas[0].buildings.bunker * 5;
  
  
        this.tank_etiqueta2_t2 =data.guerrillas[0].army.assault * 0.1 + 
        data.guerrillas[0].army.engineer * 0.9 + data.guerrillas[0].army.tank * 0.6 + data.guerrillas[0].buildings.bunker * 0.9;
  
  
        this.bunker_etiqueta2_t2 = data.guerrillas[0].army.assault * 0.05 + 
        data.guerrillas[0].army.engineer * 0.9 + data.guerrillas[0].army.tank * 1 + data.guerrillas[0].buildings.bunker * 0;
  
  
      });

    }
 
    
  }

  back(){
    this.router.navigate(['/ranking']);
  }

}