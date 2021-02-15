import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'contact-create-dialog',
  templateUrl: './contact-create-dialog.component.html',
  styleUrls: ['./contact-create-dialog.component.css'],
})
export class ContactCreateDialog {
  constructor(private dialogRef: MatDialogRef<ContactCreateDialog>) {}
  onClose() {
    this.dialogRef.close();
  }
}
