import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-chat-session',
  templateUrl: './create-chat-session.component.html',
  styleUrls: ['./create-chat-session.component.css'],
})
export class CreateChatSessionComponent {
  name: string = '';
  response: string | null = null;
  error: string | null = null;
  isLoading: boolean = false;
chatSessionForm: any;

  constructor(private http: HttpClient) {}

  createChatSession() {

    if (!this.name.trim()) {
      this.error = 'Name is required!';
      this.response = null;
      return;
    }

    this.isLoading = true;     this.error = null;
    this.response = null;

    const url = '/api/Chat/CreateChatSession';

    this.http
      .post<string>(
        url,
        {},
        { params: { Name: this.name.trim() }, responseType: 'text' as 'json' }
      )
      .subscribe({
        next: (res) => {
          this.response = res;
          this.error = null;
        },
        error: (err) => {
          this.error =
            err?.error?.message ||
            'Failed to create chat session. Please try again.';
          console.error('Error:', err);
        },
        complete: () => {
          this.isLoading = false; 
        },
      });
  }
}
