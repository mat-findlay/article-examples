import { Injectable } from '@angular/core';
import { Album } from './album/album.types';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  protected albumList = [
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
      releaseDate: 'Jan 1, 2006',
    },
    {
      id: 1,
      title: 'day = new Day(Yesterday)',
      artist: 'Jethro Null',
      cover: '../../assets/flute-thumb.jpeg',
      releaseDate: 'Jan 1, 2006',
    },
    {
      id: 1,
      title: 'I Wanna Be Your Bogg',
      artist: 'Pete Bogg',
      cover: '../../assets/flute-thumb.jpeg',
      releaseDate: 'Jan 1, 2006',
    },
  ];

  getAllAlbums(): Album[] {
    return this.albumList;
  }
}
