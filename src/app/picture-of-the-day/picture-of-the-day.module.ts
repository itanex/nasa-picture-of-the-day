import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PictureOfTheDayComponent } from './picture-of-the-day.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: PictureOfTheDayComponent
            }
        ])
    ],
    exports: [],
    declarations: [PictureOfTheDayComponent],
    providers: [],
})
export class PictureOfTheDayModule { }
