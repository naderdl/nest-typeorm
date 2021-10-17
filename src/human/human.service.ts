import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHumanDto } from './dto/create-human.dto';
import { UpdateHumanDto } from './dto/update-human.dto';
import { Human } from './human.entity';

@Injectable()
export class HumanService {
  constructor(
    @InjectRepository(Human)
    private readonly humanRepository: Repository<Human>,
  ) {}

  async create(createHumanDto: CreateHumanDto): Promise<Human> {

    const human = new Human();
    human.firstName = createHumanDto.firstName;
    human.lastName = createHumanDto.lastName;
    human.isActive = false;
    human.isTest = true

    return this.humanRepository.save(human)
  }

  findAll() {
    return this.humanRepository.findAndCount()
  }

  findOne(id: number) {
    return this.humanRepository.findOne(id)

  }

  update(id: number, updateHumanDto: UpdateHumanDto) {
    return `This action updates a #${id} human`;
  }

  remove(id: number) {
    return `This action removes a #${id} human`;
  }
}
