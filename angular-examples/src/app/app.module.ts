import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { AlbumContainerComponent } from './album-container/album-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    AlbumContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
