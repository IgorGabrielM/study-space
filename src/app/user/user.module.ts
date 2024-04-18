import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class UserModule { }
