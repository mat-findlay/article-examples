import { Component } from '@angular/core';
import { Album } from '../album/album.types';

@Component({
  selector: 'app-album-container',
  templateUrl: './album-container.component.html',
  styleUrls: ['./album-container.component.css']
})
export class AlbumContainerComponent {
  albumList: Album[] = [
  {
    id: 1,
    title: 'No Sleep \'Til New Providence',
    artist: 'Ghost Pirate',
    cover: '../../assets/ghost-pirate-thumb.png',
    releaseDate: 'Jan 1, 2006',
  },
  {
    id: 2,
    title: 'Nifty As I Want To Be',
    artist: 'Nifty Cal',
    cover: '../../assets/mic-thumb.png',
    releaseDate: 'Jan 1, 2006',
  },
  {
    id: 1,
    title: 'New Day(Yesterday)',
    artist: 'Jethro Null',
    cover: '../../assets/flute-thumb.jpeg',
    releaseDate: 'Jan 1, 2006',
  },
]
}
