import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashcardsFormComponent } from './flashcards-form.component';

describe('FlashcardsFormComponent', () => {
  let component: FlashcardsFormComponent;
  let fixture: ComponentFixture<FlashcardsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardsFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlashcardsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
