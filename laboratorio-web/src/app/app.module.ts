import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './start/login/login.component';
import { SignupComponent } from './start/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReminderComponent } from './notify/reminder/reminder.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { NavComponent } from './navigation/nav/nav.component';
import {SharedModule} from './shared/shared.module';
import { ChatComponent } from './chat/chat.component';
import { ChatItemComponent } from './chat/chat-item/chat-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    ReminderComponent,
    ProjectListComponent,
    NavComponent,
    ChatComponent,
    ChatItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
