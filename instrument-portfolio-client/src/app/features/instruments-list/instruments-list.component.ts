import { Component } from '@angular/core';
import { Instrument } from 'src/app/shared/models/Instrument.model';
import { InstrumentService } from 'src/app/core/services/instruments.service';
import { Observable, combineLatest, interval } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith, switchMap, timeInterval, take } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateInstrumentDialogComponent } from '../create-instrument-dialog/create-instument-dialog.component';

@Component({
  selector: 'app-instruments-list',
  templateUrl: './instruments-list.component.html',
  styleUrls: ['./instruments-list.component.css']
})
export class InstrumentsListComponent {
  allInstrumentsInterval$: Observable<Array<Instrument>>;
  filteredInstruments$: Observable<Array<Instrument>>;
  isUpdatedByUser = false;
  filter: FormControl;
  filter$: Observable<string>;
  
  displayedColumns = ["name", "symbol", "instrumentType", "action"];

  constructor(private instrumentService: InstrumentService,
              private matDialog: MatDialog) {
      this.allInstrumentsInterval$ = interval(1000).pipe(
        startWith(0),
        switchMap(() =>
          this.instrumentService.getAllInstruments()
        )
      );
  
      this.allInstrumentsInterval$.subscribe();
  
      this.filter = new FormControl('');
      this.filter$ = this.filter.valueChanges.pipe(startWith(''));
  
      this.filteredInstruments$ = combineLatest(this.filter$, this.allInstrumentsInterval$).pipe(
        map(([filterString, instruments]) => instruments.filter(instrument => 
                instrument.name.toLowerCase().startsWith(filterString.toLowerCase()))));
  }

  deleteInstrument(instrument: Instrument) {    
    if (confirm("Are you sure you want to delete?")) {
      this.instrumentService.deleteInstrument(instrument.instrumentId).then(
      result => {
        console.log(`Deleted an instrument with id: ${instrument.instrumentId}`);
      }, error => {
        console.log(`An error has occured when trying to delete ${JSON.stringify(error)}`)
      });
    }
  }

  addNewInstrument() {
    this.matDialog.open(CreateInstrumentDialogComponent,  new MatDialogConfig())
      .afterClosed().subscribe(success => {
        if (success) {
          console.log(`Created a new Instrument`);
        }
      });
  }
}