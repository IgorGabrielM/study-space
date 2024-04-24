import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    PostComponent,
    HeaderComponent
  ],
  exports: [
    PostComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class ComponentsModule { }
