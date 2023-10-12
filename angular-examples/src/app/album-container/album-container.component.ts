import { Component } from '@angular/core';
import { Album } from '../album/album.types';

@Component({
  selector: 'app-album-container',
  templateUrl: './album-container.component.html',
  styleUrls: ['./album-container.component.css']
})
export class AlbumContainerComponent {
  album: Album = {
    id: 1,
    title: 'No Sleep \'Til Nassau',
    artist: 'Ghost Pirate',
    cover: '../../assets/ghost-pirate-thumb.png',
    releaseDate: 'Jan 1, 2006',
  }
}
