import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { authGuard } from './guards/auth.guard';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditComponentReactiveFormComponent } from './edit-component-reactive-form/edit-component-reactive-form.component';

const routes: Routes = [
  { path: '', canActivate: [authGuard] ,component: HomeComponent },
  { path: 'about',canActivate: [authGuard] , component: AboutComponent },
  { path: 'contacts',canActivate: [authGuard] , component: ContactsComponent },

  //respecter l'ordre des routes des contacts 
  // ==> "edit"  ==> :id
  { path: 'contacts/edit/:id',canActivate: [authGuard] , component: EditContactComponent },
  { path: 'contacts/edit-reactive-form',canActivate: [authGuard] , component: EditComponentReactiveFormComponent },
  { path: 'contacts/:id',canActivate: [authGuard] , component: ContactDetailComponent },
  
  { path: 'signin', component: SigninComponent },


  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
