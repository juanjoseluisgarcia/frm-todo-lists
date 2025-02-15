import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { addNote, toggleNote, loadNotes } from './note.actions';
import { AppState } from './app.state';

@Injectable()
export class NoteEffects {
  private actions$ = inject(Actions);
  private store = inject<Store<AppState>>(Store);

  saveNotes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addNote, toggleNote),
        tap(() => {
          this.store.select(state => state.notes).subscribe(notes => {
            localStorage.setItem('notes', JSON.stringify(notes));
          });
        })
      ),
    { dispatch: false }
  );

  loadNotes$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadNotes),
        tap(() => {
          const storedNotes = localStorage.getItem('notes');
          const notes = storedNotes ? JSON.parse(storedNotes) : [];
          this.store.dispatch(loadNotes({ notes }));
        })
      ),
    { dispatch: false }
  );
}
