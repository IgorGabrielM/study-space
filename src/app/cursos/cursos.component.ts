import {Component, OnInit} from '@angular/core';
import {ComponentsModule} from "../components/components.module";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {Breakpoints} from "@angular/cdk/layout";
import {DialogPostComponent} from "../home/dialog-post/dialog-post.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogMediaComponent} from "../user/dialog-media/dialog-media.component";
import {MediaService} from "../services/media.service";
import {MediaModel} from "../models/media.model";

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    ComponentsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {

  cursos: MediaModel[] = []

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private mediaService: MediaService,
  ) {}

  ngOnInit() {
    this.loadMedia()
  }

  openDialogMedia(){
    let dialogWidth = '90vw';

    const dialogRef = this.dialog.open(DialogMediaComponent, {
      width: dialogWidth,
      maxWidth: '100vw',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadMedia();
    })
  }

  loadMedia(){
    this.mediaService.list().then((res) => {
      this.cursos = res.reverse();
    })
  }

  goTo(route: string) {
    this.router.navigate([`../${route}`]);
  }
}
