import {Component, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {Note} from '../models/note.model';
import {Store} from '@ngrx/store';
import {toggleNote} from '../state/note.actions';
import {MatCard} from '@angular/material/card';
import {MatCheckbox} from '@angular/material/checkbox';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-note-list',
  imports: [
    MatCard,
    MatCheckbox,
    AsyncPipe
  ],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent {
  store = inject(Store<{ notes: Note[] }>);
  notes$: Observable<Note[]> = this.store.select(state => state.notes);

  toggle(id: string) {
    this.store.dispatch(toggleNote({ id }));
  }
}
