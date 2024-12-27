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
  }

  async onClose(): Promise<void> {
    // Nothing to clean up.
  }
}