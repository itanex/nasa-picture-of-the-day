import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

/**
 * Converts provided ngbDateStuct to a Native JavaScript Object
 * @param date NGB Date Struct to convert
 */
export function structToDate(date: NgbDateStruct) {
    return new Date(
        date.year,
        date.month - 1,
        date.day
    );
}
