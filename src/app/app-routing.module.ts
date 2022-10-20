import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DecryptComponent } from './decrypt/decrypt.component';
import { EncryptComponent } from './encrypt/encrypt.component';
import { HomeComponent } from './home/home.component';
import {LostComponent} from "./lost/lost.component";

const routes: Routes = [ {path : '' , component : HomeComponent } ,
{path : 'encrypt' , component : EncryptComponent },
{path : 'decrypt' , component : DecryptComponent},
{path : '**' ,  component : LostComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})

export class AppRoutingModule {}
