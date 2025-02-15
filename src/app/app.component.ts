import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {AddNoteComponent} from './add-note/add-note.component';
import {NoteListComponent} from './note-list/note-list.component';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NoteListComponent, AddNoteComponent, MatSidenavModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frm-todo-lists';
}
