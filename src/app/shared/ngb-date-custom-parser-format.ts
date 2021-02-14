import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { structToDate } from "./functions/struct-to-date.fn";

@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
  constructor(
    private datePipe: DatePipe
  ) { super(); }

  parse(value: string): NgbDateStruct | null {
    return null;
  }

  format(date: NgbDateStruct | null): string {
    // date can be null/incomplete on initial loads
    if (date) {
      const rawDate = structToDate(date);
      return `${this.datePipe.transform(rawDate, 'yyyy MMMM dd')}`;
    }

    return '';
  }
}
