import { Client, Message } from 'discord.js';

declare module 'easy-discord-error' {
  export function errorHandler(err: string, message: Message, id: string, client: Client);
  export function embedErrorHandler(err: string, message: Message, id: string, client: Client);

}
