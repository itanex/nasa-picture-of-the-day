import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { PictureOfTheDayComponent } from './picture-of-the-day.component';

@NgModule({
    imports: [
        SharedModule,
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
