import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./picture-of-the-day/picture-of-the-day.module')
            .then(m => m.PictureOfTheDayModule)
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
