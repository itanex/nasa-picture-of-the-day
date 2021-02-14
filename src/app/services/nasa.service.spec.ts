import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NasaService } from './nasa.service';
import { Potd } from '../picture-of-the-day/potd.model';

describe('NasaService', () => {
    let service: NasaService;
    let httpMock: HttpTestingController;

    const mockRecord: Potd = Object.assign({}, {
        title: 'A Title',
        copyright: 'A Copyright',
        date: '2021-01-01',
        explanation: 'A Description',
        media_type: 'image',
        service_version: 'v1',
        url: 'https://apod.nasa.gov/image',
        hdurl: 'https://apod.nasa.gov/hd-image'
    });

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                NasaService,
                DatePipe
            ],
        });

        service = TestBed.inject(NasaService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should getImage() should call http GET method', () => {
        // Arrange
        const displayDate: Date = new Date(2021, 0, 1);

        // Act
        service.getImage(displayDate)
            .subscribe();

        // Assert
        const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2021-01-01&end_date=2021-01-01`

        const request = httpMock.expectOne(url);
        expect(request.request.method).toBe('GET');
        request.flush(mockRecord)
    });
});
