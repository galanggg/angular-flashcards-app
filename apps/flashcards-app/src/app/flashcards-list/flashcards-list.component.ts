import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Flashcard } from 'libs/api-interfaces';
import { MaterialModule } from '@flashcards-app/material';

@Component({
  selector: 'app-flashcards-list',
  standalone: true,
  imports: [CommonModule, MaterialModule, NgClass],
  templateUrl: './flashcards-list.component.html',
  styleUrl: './flashcards-list.component.css',
})
export class FlashcardsListComponent {
  @Input() flashcards: Flashcard[] = [];
  //   @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() completed = new EventEmitter();
  hideToggle = false;
}
