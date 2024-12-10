// chat-session.component.ts
import { Component, OnInit } from '@angular/core';
import { ChatSessionService } from 'src/chat-session.service';


@Component({
  selector: 'app-chat-session',
  templateUrl: './chat-session.component.html',
  styleUrls: ['./chat-session.component.css'],
})
export class ChatSessionComponent implements OnInit {
  chatHistory: any[] = [];   loading: boolean = true;
errorMessage: any;
  constructor(private chatSessionService: ChatSessionService) {}
  ngOnInit(): void {
    this.fetchChatHistory();
  }

  fetchChatHistory(): void {
    this.chatSessionService.getChatSession().subscribe(
      (response) => {
        console.log('Chats fetched successfully:', response);
        this.chatHistory = response.history;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching chat history:', error);
        this.loading = false;
      }
    );
  }
}
