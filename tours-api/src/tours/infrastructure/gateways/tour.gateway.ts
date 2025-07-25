import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable, Logger } from '@nestjs/common';

@WebSocketGateway({
  namespace: 'likes',
  cors: true,
})
@Injectable()
export class TourGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(TourGateway.name);

  emitLikeUpdate(tourId: string, likes: number): void {
    const payload = { tourId, likes };
    this.logger.log(`Emitting like update globally and to room ${tourId}`);

    this.server.emit('tour-like-update', payload);
    this.server.to(tourId).emit('tour-like-update', payload);
  }

  @SubscribeMessage('join-tour-room')
  handleJoinTourRoom(
    @MessageBody() tourId: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.join(tourId);
    this.logger.log(`Client ${client.id} joined room ${tourId}`);
  }

  @SubscribeMessage('leave-tour-room')
  handleLeaveTourRoom(
    @MessageBody() tourId: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.leave(tourId);
    this.logger.log(`Client ${client.id} left room ${tourId}`);
  }

  handleConnection(client: Socket): void {
    this.logger.log(client.id + ' joined!');
  }

  handleDisconnect(client: Socket): void {
    this.logger.log(client.id + ' left!');
  }
}
