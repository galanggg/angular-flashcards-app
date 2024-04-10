import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Flashcard } from 'libs/api-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-flashcards-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    NgClass,
  ],
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
