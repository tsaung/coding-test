import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ContactList } from './contact-list/contact-list.component';

@NgModule({
  declarations: [ContactList],
  imports: [
    MaterialModule,
    RouterModule.forChild([{ path: '', component: ContactList }]),
  ],
})
export class ContactsModule {}
