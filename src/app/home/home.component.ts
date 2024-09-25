import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  profile={
    Firstname:"lilia",
    lastName:"jemai",
    age:24,
    country:"Tunisia",
    GitHub:"https://github.com/Jemai-Lilia"
  }
  LinkImage="https://cdn.pixabay.com/photo/2024/06/24/04/05/woman-8849047_640.jpg"
  Style="block"
  Number=1

  //Directive *ngIf
  verif=true

  //Directive *ngFor
  dataArray=["tunisia","marroco","Algerie"]

  //Directive *ngSwitch
  nbr=3

  //Directive *ngClass
  titleClass="title"

  //Directive *ngStyle
  style1="red"
  style2="30px"
  style3="underline"


  inc(){
    this.Number++
  }
  dec(){
    this.Number--
  }

  show(){
    this.Style="color:pink; display:block"
  }
  hidden(){
    this.Style="none"

  }

}
