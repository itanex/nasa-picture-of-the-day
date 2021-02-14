import { DatePipe } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { NasaService } from '../services/nasa.service';
import { SharedModule } from '../shared/shared.module';
import { PictureOfTheDayComponent } from './picture-of-the-day.component';
import { Potd } from './potd.model';

class Stub {
  getImage(date: Date): Observable<Potd> {
    return of(Object.assign({}, {
      title: 'A Title',
      copyright: 'A Copyright',
      date: '2021-01-01',
      explanation: 'A Description',
      media_type: 'image',
      service_version: 'v1',
      url: 'https://apod.nasa.gov/image',
      hdurl: 'https://apod.nasa.gov/hd-image'
    }));
  }
}

describe('PictureOfTheDayComponent', () => {
  let nasaService: NasaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
      ],
      declarations: [
        [PictureOfTheDayComponent]
      ],
      providers: [{
        provide: NasaService,
        useClass: Stub
      },
        DatePipe]
    }).compileComponents();

    nasaService = TestBed.inject(NasaService);
  });

  it('should create the component', () => {
    // Arrange
    const fixture = TestBed.createComponent(PictureOfTheDayComponent);

    // Act
    const component = fixture.componentInstance;

    // Assert
    expect(component).toBeTruthy();
  });

  describe('When Component Created', () => {
    let fixture: ComponentFixture<PictureOfTheDayComponent>;
    let component: PictureOfTheDayComponent;
    let compiled: any;

    beforeEach(async () => {
      fixture = TestBed.createComponent(PictureOfTheDayComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      compiled = fixture.nativeElement;
    });

    it(`should have as title 'Astronomy Picture of the Day yyyy MMMM dd'`, fakeAsync(() => {
      // Arrange
      const displayDate: Date = new Date(2021, 0, 1);

      // Act
      component.imageDate = displayDate;
      fixture.detectChanges();
      tick();

      // Assert
      const expectedText = 'Astronomy Picture of the Day for 2021 January 01';
      const elementText = compiled
        .querySelector('h2')
        .textContent;

      expect(elementText).toEqual(expectedText);
    }));

    it('should display date as yyyy MMMM dd in selected input', fakeAsync(() => {
      // Arrange
      const displayDate: Date = new Date(2021, 0, 1);

      // Act
      component.imageDate = displayDate;
      fixture.detectChanges();
      tick();

      // Assert
      const expectedText = '2021 January 01';
      const elementText = compiled
        .querySelector('#viewdate')
        .value;

      expect(elementText).toEqual(expectedText);
    }));

    it('should display image title, description, image, HD link', fakeAsync(() => {
      // Arrange
      const displayDate: Date = new Date(2021, 0, 1);

      // Act
      component.imageDate = displayDate;
      fixture.detectChanges();
      tick();

      // Assert
      const expectedTitle = 'A Title';
      const expectedDesc = 'A Description';
      const expectedUrl = 'https://apod.nasa.gov/image';
      const expectedHdUrl = 'https://apod.nasa.gov/hd-image';

      const elementTitle = compiled
        .querySelector('#title')
        .textContent;
      const elementDesc = compiled
        .querySelector('#description')
        .textContent;
      const elementUrl = compiled
        .querySelector('img')
        .src;
      const elementHdUrl = compiled
        .querySelector('#hdurl')
        .href;

      expect(elementTitle).toEqual(expectedTitle);
      expect(elementDesc).toEqual(expectedDesc);
      expect(elementUrl).toEqual(expectedUrl);
      expect(elementHdUrl).toEqual(expectedHdUrl);
    }));

  });
});
