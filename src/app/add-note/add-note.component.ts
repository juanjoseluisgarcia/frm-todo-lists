import {Component, inject} from '@angular/core';
import {addNote} from '../state/note.actions';
import {Store} from '@ngrx/store';
import {v4 as uuidv4} from 'uuid';
import {FormsModule} from '@angular/forms';
import {AppState} from '../state/app.state';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-add-note',
  imports: [

    FormsModule,
    MatButton
  ],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent {
  private store = inject<Store<AppState>>(Store);
  description = '';

  add() {
    if (this.description.trim()) {
      this.store.dispatch(addNote({ note: { id: uuidv4(), description: this.description, done: false } }));
      this.description = '';
    }
  }
}
