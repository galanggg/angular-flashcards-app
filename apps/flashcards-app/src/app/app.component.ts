import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FlashcardsFormComponent } from './flashcards-form/flashcards-form.component';
import { FlashcardsListComponent } from './flashcards-list/flashcards-list.component';
import { FlashcardsLocalFacade } from '@flashcards-app/flashcards-local-data';
import { Observable, filter, tap } from 'rxjs';
import { Flashcard } from 'libs/api-interfaces';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@flashcards-app/material';
@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    MaterialModule,
    FlashcardsFormComponent,
    FlashcardsListComponent,
    HttpClientModule,
    CommonModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  flashcards$: Observable<Flashcard[]> = this.flashcardsFacade.allFlashcards$;
  selectedFlashcard$: Observable<Flashcard> =
    this.flashcardsFacade.selectedFlashcard$.pipe(
      filter(
        (flashcard): flashcard is Flashcard =>
          flashcard !== undefined && flashcard !== null
      )
    );
  title = 'flashcards-app';
  constructor(private flashcardsFacade: FlashcardsLocalFacade) {}

  ngOnInit() {
    this.flashcardsFacade.getAllFlashcards();
  }
  selectFlashcard(flashcard: Flashcard) {
    console.log('selecting flashcard', flashcard);
    this.flashcardsFacade.selectFlashcard(flashcard.id as string);
  }

  deleteFlashcard(flashcard: Flashcard) {
    console.log('deleting flashcard', flashcard);
    this.flashcardsFacade.deleteFlashcard(flashcard);
  }

  saveFlashcard(flashcard: Flashcard) {
    console.log(flashcard);
    this.flashcardsFacade.saveFlashcard(flashcard);
  }

  reset() {
    this.loadFlashcards();
    this.flashcardsFacade.resetSelectedFlashcard();
  }

  loadFlashcards() {
    this.flashcardsFacade.loadFlashcards();
  }

  completeFlashcard(flashcardFlagData: any) {
    this.flashcardsFacade.completeFlashcard(flashcardFlagData);
  }
}
