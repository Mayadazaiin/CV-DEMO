import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from 'src/chat/chat.component';
import { ChatSessionComponent } from './chat-session/chat-session.component';
import { CreateChatSessionComponent } from './create-chat-session/create-chat-session.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'chat-session', component: ChatSessionComponent },
  {
    path: 'create-chat',
    component: CreateChatSessionComponent,
  },  { path: 'edit/:id', component: EditComponent },
  {
    path: 'add-batch',
    component: AddBatchComponent,

  },
  { path: 'display', component: DisplayDataComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
