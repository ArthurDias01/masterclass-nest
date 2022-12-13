import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/roket-members-repository';

@Controller('app')
export class AppController {
  // constructor(private prisma: PrismaService) { }
  constructor(private rocketMembersRepository: RocketMembersRepository) { }

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {

    const { name, function: memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction);

  }
}
