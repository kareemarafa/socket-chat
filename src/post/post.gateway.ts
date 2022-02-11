import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(3001, {
  cors: {
    origin: '*',
  },
})
export class PostGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('chat') // Topic
  events(@MessageBody() data: { message: string; userId: number }): void {
    console.log({ data });
    this.server.emit('chat', data);
  }
}
