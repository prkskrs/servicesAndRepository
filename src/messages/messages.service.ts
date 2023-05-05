import { MessagesRepository } from '../messages/messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {
    this.messagesRepo = messagesRepo;
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.getAll();
  }

  create(message: string) {
    return this.messagesRepo.create(message);
  }
}
