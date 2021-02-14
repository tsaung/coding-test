import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatTableModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    MatTableModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
