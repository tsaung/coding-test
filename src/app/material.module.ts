import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatTableModule, MatToolbarModule],
  exports: [MatTableModule, MatToolbarModule],
})
export class MaterialModule {}
