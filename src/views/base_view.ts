import { ItemView, WorkspaceLeaf } from 'obsidian';

export class BaseView extends ItemView {
  static VIEW_TYPE = 'base-view';
  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType(): string {
    return BaseView.VIEW_TYPE;
  }

  getDisplayText(): string {
    return 'test view';
  }

  getIcon(): string {
    return 'message-square-diff';
  }

  async onOpen(): Promise<void> {
    this.containerEl.empty();
    this.containerEl.createEl("h1", { text: "ARCHITECT!" });

    const content = this.containerEl.createEl("p", {
      text: "hell yeah.",
    });
    content.style.marginTop = "20px";
  }

  async onClose(): Promise<void> {
    // Nothing to clean up.
  }
}