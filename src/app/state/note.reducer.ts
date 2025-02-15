import { createReducer, on } from '@ngrx/store';
import { addNote, toggleNote, loadNotes } from './note.actions';
import { Note } from '../models/note.model';

export const initialState: Note[] = [];

export const noteReducer = createReducer(
  initialState,
  on(addNote, (state, { note }) => [...state, note]),
  on(toggleNote, (state, { id }) =>
    state.map(note => note.id === id ? { ...note, done: !note.done } : note)
  ),
  on(loadNotes, (_, { notes }) => notes)
);
