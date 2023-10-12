import { Component, inject } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album/album.types';

@Component({
  selector: 'app-album-container',
  templateUrl: './album-container.component.html',
  styleUrls: ['./album-container.component.css']
})
export class AlbumContainerComponent {
  albumList: Album[] = [];
  albumsService: AlbumsService = inject(AlbumsService);

  constructor() {
    this.albumList = this.albumsService.getAllAlbums();
  }
}
