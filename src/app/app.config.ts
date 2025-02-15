import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideStore} from '@ngrx/store';
import {noteReducer} from './state/note.reducer';
import {provideEffects} from '@ngrx/effects';
import {NoteEffects} from './state/note.effects';
import {AppState} from './state/app.state';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes),
    provideAnimationsAsync(), provideStore<AppState>({notes: noteReducer}), provideEffects([NoteEffects])]
};
