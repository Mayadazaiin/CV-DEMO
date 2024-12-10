import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  chats: any[] = []; 
  errorMessage: string = '';
loading: any;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.fetchChats();
  }

  fetchChats(): void {
    this.chatService.getChats().subscribe({
      next: (data) => {
        console.log(' successfully:', data);
        this.chats = data.chats;
      },
      error: (error) => {
        console.error('Error fetching chats:', error);
        this.errorMessage = 'Failedddd.';
      },
    });
  }
}
