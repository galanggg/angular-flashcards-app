import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Flashcard } from 'libs/api-interfaces';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@flashcards-app/material';

@Component({
  selector: 'app-flashcards-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MaterialModule],
  templateUrl: './flashcards-form.component.html',
  styleUrl: './flashcards-form.component.css',
})
export class FlashcardsFormComponent {
  currentFlashcard!: Flashcard;
  originalTitle = '';
  @Input() set flashcard(value: Flashcard | null) {
    if (value) this.originalTitle = `${value.title}`;
    this.currentFlashcard = Object.assign({}, value);
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
