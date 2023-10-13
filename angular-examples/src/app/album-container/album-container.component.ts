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
      title: 'No Sleep \'Til Nassau',
      artist: 'Ghost Pirate',
      cover: '../../assets/ghost-pirate-thumb.png',
      releaseDate: 'Jan 1, 2006',
    },
    {
      id: 2,
      title: 'Nifty As I Want To Be',
      artist: 'Nifty Cal',
      cover: '../../assets/mic-thumb.png',
      releaseDate: 'Jan 1, 2018',
    },
    {
      id: 3,
      title: 'day = new Day(Yesterday)',
      artist: 'Jethro Null',
      cover: '../../assets/flute-thumb.jpeg',
      releaseDate: 'Jan 1, 2020',
    },
    {
      id: 4,
      title: 'I Wanna Be Your Bogg',
      artist: 'Pete Bogg',
      cover: '../../assets/bog-thumb.png',
      releaseDate: 'Jan 1, 2020',
    },
    {
      id: 5,
      title: 'Swamped',
      artist: 'Pete Bogg',
      cover: '../../assets/bog-thumb.png',
      releaseDate: 'Jan 1, 2022',
    },
  ];
}
