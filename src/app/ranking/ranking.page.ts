import { Component, OnInit , ViewChild} from '@angular/core';
import { MenuController, IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';



@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  data =[];
  counter=0;
  name='';
  email='';
  faction='';
  name2:any;


  @ViewChild('pageTop') pageTop: IonContent;
  
  constructor(private menu: MenuController,private router:Router,public rest:RestService) {


   }

  async ngOnInit() {

    
   this.name2 = await this.rest.getCurrentUser();

    var  test = await this.fillData('','','');
  
  }

  openEnd() {
    this.pageTop.scrollToTop();
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

  goToMatch(name){
    this.rest.setEnemy(name);
    this.router.navigate(['/match']);
  }



async fillData(name,email,faction){

  return new Promise((response) => {

  this.rest.getRanking(name,email,faction).subscribe((data)=> {
  


    for (let i= 0; i <= data.length-1; i++) {
       

      
        this.data.push(data[i]);
      
      
    }

    response(this.data);

    });
  })


}
  

reload(){

 this.data =[];
 this.fillData('','','');
}

  async search(){
    this.data =[];
    this.counter=0;

    this.name=(<HTMLInputElement>document.getElementById("nameFilter")).value;
    this.faction=(<HTMLInputElement>document.getElementById("factionFilter")).value;
    this.email==(<HTMLInputElement>document.getElementById("emailFilter")).value;
  

    var  test = await this.fillData(this.name,this.email,this.faction);
  
  }
}
