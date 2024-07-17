declare module 'cleverbot-node' {
    import { EventEmitter } from 'events';

    class Cleverbot extends EventEmitter {
        configure(options: { botapi: string }): void;
        write(message: string, callback: (response: string) => void): void;
    }

    export = Cleverbot;
}
