import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { RoomsController } from './room/rooms.controller';
import { ChatWebsocketGateway } from './chat/chat.websocket.gateway';

@Module({
  imports: [ChatModule],
  controllers: [RoomsController],
  providers: [ChatWebsocketGateway],
})
export class AppModule {}
