import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);

    // Act
    const app = fixture.componentInstance;

    // Assert
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Astronomy Picture of the Day'`, () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    
    // Act
    const app = fixture.componentInstance;
    
    // Assert
    expect(app.appTitle).toEqual('Astronomy Picture of the Day');
  });

  it('should render title', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    
    // Act
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    
    // Assert
    expect(compiled.querySelector('.toolbar span').textContent)
      .toContain('Astronomy Picture of the Day');
  });
});
