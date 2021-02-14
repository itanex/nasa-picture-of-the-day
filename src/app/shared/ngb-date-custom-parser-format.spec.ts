import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter } from './ngb-date-custom-parser-format';

describe('NgbDateCustomParserFormatter', () => {
    let service: NgbDateCustomParserFormatter;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                NgbDateCustomParserFormatter,
                DatePipe
            ],
        });

        service = TestBed.inject(NgbDateCustomParserFormatter);
    });

    it('parse will return null', () => {
        // Arrange
        // Act
        // Assert
        expect(service.parse('sj/k/sk')).toBeNull();
    });

    it('format should return an empty string with bad struct', () => {
        // Arrange
        // Act
        const actual = service.format(null);

        // Assert
        expect(actual).toEqual('');
    });

    it('format should return the date as a formatted string', () => {
        // Arrange
        const input: NgbDateStruct = {
            day: 1,
            month: 1,
            year: 2021
        };

        // Act
        const actual = service.format(input);

        // Assert
        const expected: string = "2021 January 01";

        expect(actual).toEqual(expected);
    });
});
