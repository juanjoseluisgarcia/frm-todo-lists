import { createAction, props } from '@ngrx/store';
import { Note } from '../models/note.model';

export const addNote = createAction('[Note] Add', props<{ note: Note }>());
export const toggleNote = createAction('[Note] Toggle', props<{ id: string }>());
export const loadNotes = createAction('[Note] Load', props<{ notes: Note[] }>());
