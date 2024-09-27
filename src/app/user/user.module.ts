import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ComponentsModule } from '../components/components.module';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [UserComponent],
  imports: [CardModule, CommonModule, ComponentsModule],
})
export class UserModule {}
