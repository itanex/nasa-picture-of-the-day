import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

/**
 * Converts a Native Date object to the ngbDateStuct object
 * @param date Date to convert; If not provided, generates a current date
 */
export function dateToStuct(date?: Date): NgbDateStruct {
    let d = date || new Date();

    return {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate()
    };
}
