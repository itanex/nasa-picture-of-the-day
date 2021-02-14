import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
  ],
  declarations: [
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
