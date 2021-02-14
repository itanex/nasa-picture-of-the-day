import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { dateToStuct } from './date-to-stuct.fn';

describe('DateToStruct', () => {
    beforeEach(async () => { });

    it('should convert a JavaScript Date to the equivilent NgbDateStruct', () => {
        // Arrange 
        
        // January 1, 2021
        const expected: NgbDateStruct = {
            day: 1,
            month: 1,
            year: 2021
        };

        // January 1, 2021
        const input: Date = new Date(2021, 0, 1)

        // Act

        const actual = dateToStuct(input);

        // Assert

        expect(actual.day).toEqual(expected.day);
        // Ngb month is 1 based not 0 based as the Date object
        expect(actual.month).toEqual(expected.month);
        expect(actual.year).toEqual(expected.year);
    });
});
