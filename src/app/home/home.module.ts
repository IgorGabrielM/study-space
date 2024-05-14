import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../components/components.module';
import { DialogPostComponent } from './dialog-post/dialog-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    DialogPostComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ]
})
export class HomeModule { }
