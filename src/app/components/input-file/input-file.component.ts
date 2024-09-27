import {Component, EventEmitter, Input, Output} from '@angular/core';
import {finalize, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'input-file-component',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent {
  @Output() imageUrlEvent = new EventEmitter<string>();
  @Input() directory: string;

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  imageUrl: string;

  constructor(private storage: AngularFireStorage) { }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `${this.directory}/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          if (url) {
            this.imageUrl = url;
            this.imageUrlEvent.emit(this.imageUrl);
          }
        });
      })
    ).subscribe();
  }

}
