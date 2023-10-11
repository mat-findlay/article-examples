import { Component, Input } from '@angular/core';
import { Album } from './album.types';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  @Input() album!: Album;
}
