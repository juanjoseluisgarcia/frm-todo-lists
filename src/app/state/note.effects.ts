import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { tap, withLatestFrom, map } from 'rxjs/operators';
import { addNote, toggleNote, loadNotes, initializeNotes } from './note.actions';
import { AppState } from './app.state';
import { Note } from '../models/note.model';

@Injectable()
export class NoteEffects {
  private actions$ = inject(Actions);
  private store = inject<Store<AppState>>(Store);

  initializeNotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initializeNotes),
      map(() => {
        const storedNotes = localStorage.getItem('notes');
        const notes: Note[] = storedNotes ? JSON.parse(storedNotes) : [];
        return loadNotes({ notes });
      })
    )
  );

  saveNotes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addNote, toggleNote),
        withLatestFrom(this.store.pipe(select(state => state.notes))),
        tap(([_, notes]) => {
          localStorage.setItem('notes', JSON.stringify(notes));
        })
      ),
    { dispatch: false }
  );
}
