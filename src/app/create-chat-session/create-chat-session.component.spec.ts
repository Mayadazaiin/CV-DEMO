import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChatSessionComponent } from './create-chat-session.component';

describe('CreateChatSessionComponent', () => {
  let component: CreateChatSessionComponent;
  let fixture: ComponentFixture<CreateChatSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateChatSessionComponent]
    });
    fixture = TestBed.createComponent(CreateChatSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
