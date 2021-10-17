import { Module } from '@nestjs/common';
import { HumanService } from './human.service';
import { HumanController } from './human.controller';
import { Human } from './human.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Human])],
  controllers: [HumanController],
  providers: [HumanService]
})
export class HumanModule {}
