import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSessionComponent } from './chat-session.component';

describe('ChatSessionComponent', () => {
  let component: ChatSessionComponent;
  let fixture: ComponentFixture<ChatSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatSessionComponent]
    });
    fixture = TestBed.createComponent(ChatSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
