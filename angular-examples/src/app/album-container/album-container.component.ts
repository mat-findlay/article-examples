import { Component } from '@angular/core';
import { Album } from '../album/album.types';

@Component({
  selector: 'app-album-container',
  templateUrl: './album-container.component.html',
  styleUrls: ['./album-container.component.css']
})
export class AlbumContainerComponent {
  filteredAlbumList: Album[] = [];
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
      id: 1,
      title: 'day = new Day(Yesterday)',
      artist: 'Jethro Null',
      cover: '../../assets/flute-thumb.jpeg',
      releaseDate: 'Jan 1, 2020',
    },
    {
      id: 1,
      title: 'I Wanna Be Your Bogg',
      artist: 'Pete Bogg',
      cover: '../../assets/flute-thumb.jpeg',
      releaseDate: 'Jan 1, 2020',
    },
    {
      id: 1,
      title: 'Swamped',
      artist: 'Pete Bogg',
      cover: '../../assets/flute-thumb.jpeg',
      releaseDate: 'Jan 1, 2022',
    },
  ];

  constructor() {
    this.filteredAlbumList = this.albumList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredAlbumList = this.albumList;
    }

    this.filteredAlbumList = this.albumList.filter(
      album => 
        album?.title.toLowerCase().includes(text.toLowerCase()) || 
        album?.artist.toLowerCase().includes(text.toLowerCase())
    );
  }

  clearFilter(filterInput: HTMLInputElement) {
    filterInput.value = '';
    this.filteredAlbumList = this.albumList;
  }
}
