import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { structToDate } from './struct-to-date.fn';

describe('StructToDate', () => {
    beforeEach(async () => { });

    it('should convert an NgbDateStruct to the equivilent JavaScript Date', () => {
        // Arrange 

        // January 1, 2021
        const input: NgbDateStruct = {
            day: 1,
            month: 1,
            year: 2021
        };

        // January 1, 2021
        const expected: Date = new Date(2021, 0, 1)

        // Act

        const actual = structToDate(input);

        // Assert

        expect(actual.getDate()).toEqual(expected.getDate());
        expect(actual.getMonth()).toEqual(expected.getMonth());
        expect(actual.getFullYear()).toEqual(expected.getFullYear());
    });
});
