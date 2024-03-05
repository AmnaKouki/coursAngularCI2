import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetCharPipe } from './pipes/get-char.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CommentComponent } from './comment/comment.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditComponentReactiveFormComponent } from './edit-component-reactive-form/edit-component-reactive-form.component';
import { HttpClientModule } from '@angular/common/http';
import { baseUrl } from './shared/baseUrl';
import { ContactService } from './contact.service';
import { AboutService } from './services/about.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GetCharPipe,
    ParentComponent,
    ChildComponent,
    CommentComponent,
    ContactsComponent,
    HomeComponent,
    SigninComponent,
    NotFoundComponent,
    ContactDetailComponent,
    EditContactComponent,
    EditComponentReactiveFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ {provide : 'baseUrl', useValue : baseUrl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
