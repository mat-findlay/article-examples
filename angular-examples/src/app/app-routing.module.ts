import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumContainerComponent } from './album-container/album-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
