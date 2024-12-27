import { BaseView } from './baseView';
import { render } from './ui/chatbox';

export const CHAT_VIEW_TYPE = 'chat-view';

export class ChatView extends BaseView {
  static VIEW_TYPE = CHAT_VIEW_TYPE;

  getViewType(): string {
    return ChatView.VIEW_TYPE;
  }

  getDisplayText(): string {
    return 'Chatbox';
  }

  async onOpen(): Promise<void> {
    this.containerEl.empty();

    const frag = await render(this);
    this.containerEl.appendChild(frag);
  }

}