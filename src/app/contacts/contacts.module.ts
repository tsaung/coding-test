import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ContactCreateDialog } from './contact-create-dialog/contact-create-dialog.component';
import { ContactList } from './contact-list/contact-list.component';

@NgModule({
  declarations: [ContactList, ContactCreateDialog],
  imports: [
    MaterialModule,
    RouterModule.forChild([{ path: '', component: ContactList }]),
  ],
})
export class ContactsModule {}
