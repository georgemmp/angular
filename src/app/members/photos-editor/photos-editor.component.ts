import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/Photo';

@Component({
  selector: 'app-photos-editor',
  templateUrl: './photos-editor.component.html',
  styleUrls: ['./photos-editor.component.css']
})
export class PhotosEditorComponent implements OnInit {
  @Input() photos: Photo[];

  constructor() { }

  ngOnInit() {
  }

}
