import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactList } from './contact-list/contact-list.component';

@NgModule({
  declarations: [ContactList],
  imports: [RouterModule.forChild([{ path: '', component: ContactList }])],
})
export class ContactsModule {}
