import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { Flashcard } from 'libs/api-interfaces';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-flashcards-form',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
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
