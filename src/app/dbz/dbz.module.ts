import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPagesComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';
import { DbzService } from './services/dbz-service';



@NgModule({
  declarations: [
    MainPagesComponent,
    ListComponent,
    AddCharacterComponent,

  ],
  exports:[
    MainPagesComponent

  ],
  imports: [
    CommonModule,
    FormsModule,

  ]
})
export class DbzModule { }
