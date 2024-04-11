import { Injectable } from '@angular/core';
import { Flashcard } from '../../../../api-interfaces';
import { BehaviorSubject } from 'rxjs';
import { FlashcardsService } from '@flashcards-app/flashcards-data';
const mockFlashcards: Flashcard[] = [
  {
    id: 'flashcard1',
    title: 'Flashcard 1',
    description: 'Description for Flashcard 1',
    question: 'Question for Flashcard 1',
    answer: 'Answer for Flashcard 1',
    user_id: 'user1',
  },
  {
    id: 'flashcard2',
    title: 'Flashcard 2',
    description: 'Description for Flashcard 2',
    question: 'Question for Flashcard 2',
    answer: 'Answer for Flashcard 2',
    user_id: 'user2',
  },
  {
    id: 'flashcard3',
    title: 'Flashcard 3',
    description: 'Description for Flashcard 3',
    question: 'Question for Flashcard 3',
    answer: 'Answer for Flashcard 3',
    user_id: 'user3',
  },
  {
    id: 'flashcard4',
    title: 'Flashcard 4',
    description: 'Description for Flashcard 4',
    question: 'Question for Flashcard 4',
    answer: 'Answer for Flashcard 4',
    user_id: 'user4',
  },
  {
    id: 'flashcard5',
    title: 'Flashcard 5',
    description: 'Description for Flashcard 5',
    question: 'Question for Flashcard 5',
    answer: 'Answer for Flashcard 5',
    user_id: 'user5',
  },
  {
    id: 'flashcard6',
    title: 'Flashcard 6',
    description: 'Description for Flashcard 6',
    question: 'Question for Flashcard 6',
    answer: 'Answer for Flashcard 6',
    user_id: 'user6',
  },
  {
    id: 'flashcard7',
    title: 'Flashcard 7',
    description: 'Description for Flashcard 7',
    question: 'Question for Flashcard 7',
    answer: 'Answer for Flashcard 7',
    user_id: 'user7',
  },
  {
    id: 'flashcard8',
    title: 'Flashcard 8',
    description: 'Description for Flashcard 8',
    question: 'Question for Flashcard 8',
    answer: 'Answer for Flashcard 8',
    user_id: 'user8',
  },
  {
    id: 'flashcard9',
    title: 'Flashcard 9',
    description: 'Description for Flashcard 9',
    question: 'Question for Flashcard 9',
    answer: 'Answer for Flashcard 9',
    user_id: 'user9',
  },
  {
    id: 'flashcard10',
    title: 'Flashcard 10',
    description: 'Description for Flashcard 10',
    question: 'Question for Flashcard 10',
    answer: 'Answer for Flashcard 10',
    user_id: 'user10',
  },
];
const mockFlashcard = {
  id: null,
  title: '',
  description: '',
  question: '',
  answer: '',
  user_id: '',
};

@Injectable({
  providedIn: 'root',
})
export class FlashcardsLocalFacade {
  constructor(private flashcardsService: FlashcardsService) {}

  private loaded = new BehaviorSubject<boolean>(false);
  private flashcards = new BehaviorSubject<Flashcard[]>([]);
  private selectedFlashcard = new BehaviorSubject<Flashcard>(mockFlashcard);

  loaded$ = this.loaded.asObservable();
  allFlashcards$ = this.flashcards.asObservable();
  selectedFlashcard$ = this.selectedFlashcard.asObservable();

  getAllFlashcards() {
    this.flashcardsService.all().subscribe((flashcards) => {
      this.flashcards.next(flashcards);
    });
  }

  resetSelectedFlashcard() {
    this.selectedFlashcard.next(Object.assign({}, mockFlashcard));
  }

  selectFlashcard(selectedId: string) {
    const flashcard =
      this.flashcards.value.find((flashcard) => flashcard.id == selectedId) ||
      Object.assign({}, mockFlashcard);
    this.selectedFlashcard.next(flashcard);
  }

  loadFlashcards() {
    this.flashcardsService.all().subscribe((flashcards) => {
      this.flashcards.next(flashcards);
    });
  }

  loadFlashcard(flashcardId: string) {
    const flashcard =
      this.flashcards.value.find((flashcard) => flashcard.id == flashcardId) ||
      Object.assign({}, mockFlashcard);
    this.selectedFlashcard.next(flashcard);
  }

  saveFlashcard(flashcard: Flashcard) {
    if (flashcard.id) {
      console.log('updating flashcard', flashcard);
      this.updateFlashcard(flashcard);
    } else {
      console.log('creating flashcard', flashcard);
      this.createFlashcard(flashcard);
    }
  }

  createFlashcard(flashcard: Flashcard) {
    console.log(flashcard);
    this.flashcardsService.create(flashcard).subscribe((flashcard: any) => {
      this.flashcards.next([...this.flashcards.value, flashcard]);
    });
  }

  updateFlashcard(flashcard: Flashcard) {
    this.flashcardsService.update(flashcard).subscribe(() => {
      this.flashcards.next(
        this.flashcards.value.map((c) => {
          return c.id == flashcard.id ? Object.assign({}, flashcard) : c;
        })
      );
    });
  }

  deleteFlashcard(flashcard: Flashcard) {
    this.flashcardsService.delete(flashcard).subscribe(() => {
      this.flashcards.next(
        this.flashcards.value.filter((c) => c.id !== flashcard.id)
      );
    });
  }

  completeFlashcard(flashcardFlagData: any) {
    const flashcards = this.flashcards.value.map((c) => {
      return c.id == flashcardFlagData.flashcard.id
        ? { ...c, flag: flashcardFlagData.flag }
        : c;
    });
    this.flashcards.next(flashcards);
  }
}
