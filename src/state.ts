/* eslint-disable @typescript-eslint/no-explicit-any */
export class PluginState {
    private state: Record<string, any> = {};

    get(key: string): any {
        return this.state[key];
    }

    set(key: string, value: any): void {
        this.state[key] = value;
    }

    subscribe(key: string, callback: (value: any) => void): void {
       
    }
}