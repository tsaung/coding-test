import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatTableModule, MatToolbarModule, MatButtonModule, MatIconModule],
  exports: [MatTableModule, MatToolbarModule, MatButtonModule, MatIconModule],
})
export class MaterialModule {}
