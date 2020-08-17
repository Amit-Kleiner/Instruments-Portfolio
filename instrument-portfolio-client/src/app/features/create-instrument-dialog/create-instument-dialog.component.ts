import { Component } from '@angular/core';
import { InstrumentService } from 'src/app/core/services/instruments.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-instrument-dialog',
  templateUrl: './create-instrument-dialog.component.html',
  styleUrls: ['./create-instrument-dialog.component.css']
})
export class CreateInstrumentDialogComponent {
  name: string = "";
  symbol: string = "";
  instrumentType: string = "";

  constructor(private instrumentService: InstrumentService,
              public dialogRef: MatDialogRef<CreateInstrumentDialogComponent>,
              public snackBar: MatSnackBar) { }
  saveInstrument() {
      this.instrumentService.addNewInstrument(this.name, this.symbol, this.instrumentType).then(
        result => {
            this.snackBar.open("Instrument was added successfuly", "Close", {
              duration: 2000,
            });
            
            this.dialogRef.close(true);
        }, error => { 
          console.log(`An error has occured while creating a new instrument ${JSON.stringify(error)}`);

          this.snackBar.open(`Failure trying to add the instrument`, "Close", {
            duration: 3000,
          });
        }
      );
    }
}
