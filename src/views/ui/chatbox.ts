import { BaseView } from "../baseView";

export function build_html(obsidian_view: BaseView): string {
    const top_bar_buttons = [
      { title: 'Chat History', icon: 'history' },
      { title: 'Settings', icon: 'settings' },
      { title: 'New Chat', icon: 'plus' },
    ].map(btn => `
      <button title="${btn.title}">
        ${(btn.icon)}
      </button>
    `).join('');

    return `
      <div class="chat-container">
        <div class="chat-top-bar">
          <input class="chat-name-input" type="text" placeholder="Chat Name">
          ${top_bar_buttons}
        </div>
        <div class="chat-thread">
          <!-- Chat messages will appear here -->
        </div>
        <div class="chat-settings-overlay" style="display: none;">
          <button class="close-overlay">X</button>
          <div class="settings-content"></div>
        </div>
      </div>
    `;
  }

export async function render(obsidian_view: BaseView, opts = {}): Promise<DocumentFragment> {
    const html = build_html(obsidian_view);
    const frag = document.createRange().createContextualFragment(html);

    // Post-process for interactivity
    await post_process(frag, obsidian_view);

    return frag;
  }


async function post_process(frag: DocumentFragment, obsidian_view: BaseView) {
    const overlay = frag.querySelector('.chat-settings-overlay') as HTMLElement;
    const settingsButton = frag.querySelector('button[title="Settings"]') as HTMLElement;
    const closeOverlayButton = frag.querySelector('.close-overlay') as HTMLElement;
    const chatThread = frag.querySelector('.chat-thread') as HTMLElement;
    const newChatButton = frag.querySelector('button[title="New Chat"]') as HTMLElement;

    // Toggle Settings Overlay
    settingsButton.addEventListener('click', () => {
      overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    });

    // Close Settings Overlay
    closeOverlayButton.addEventListener('click', () => {
      overlay.style.display = 'none';
    });

    // New Chat Button: Clears chat thread
    newChatButton.addEventListener('click', () => {
      chatThread.innerHTML = '<p>New chat started!</p>';
    });
  }
