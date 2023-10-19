import { Character } from './../interfaces/character.interface';
import { Component } from "@angular/core";

import { first } from "rxjs";
import { DbzService } from "../services/dbz-service";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPagesComponent {

 constructor ( private dbzService: DbzService ){}

 get character(): Character[]{
  return [...this.dbzService.character];
 }

 onDeleteCharacter(id:string):void{
  this.dbzService.deleteCharacterById(id);
 }

 onNewCharacter(character: Character):void {

  this.dbzService.addCharacter( character );
 }

}
