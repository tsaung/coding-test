import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'contact-create-dialog',
  templateUrl: './contact-create-dialog.component.html',
  styleUrls: ['./contact-create-dialog.component.css'],
})
export class ContactCreateDialog implements OnInit {
  contactForm: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<ContactCreateDialog>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const message = this.contactForm.valid
      ? 'Successfully Saved'
      : 'Please fill valid data';

    this.snackBar.open(message, 'close', { duration: 20000 });
    if (this.contactForm.valid) {
      this.dialogRef.close(this.contactForm.value);
    }
  }

  get emailControl() {
    return this.contactForm.get('email');
  }

  private initForm() {
    this.contactForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
    });
  }
}
