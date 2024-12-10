import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ApiInterceptor } from 'src/interceptors/api.interceptor';
import { ChatComponent } from '../chat/chat.component';
import { ChatSessionComponent } from './chat-session/chat-session.component';
import { CreateChatSessionComponent } from './create-chat-session/create-chat-session.component';
import { HeaderComponent } from './header/header.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChatComponent,
    ChatSessionComponent,
    CreateChatSessionComponent,
    HeaderComponent,
    DisplayDataComponent,
    AddBatchComponent,
    EditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    FileUploadModule,
    BrowserAnimationsModule,
    ToastModule // Ensure this module is imported correctly
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
