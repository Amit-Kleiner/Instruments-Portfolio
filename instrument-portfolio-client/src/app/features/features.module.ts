import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InstrumentsListComponent } from './instruments-list/instruments-list.component';
import { CreateInstrumentDialogComponent } from './create-instrument-dialog/create-instument-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    InstrumentsListComponent,
    CreateInstrumentDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class FeaturesModule { }
