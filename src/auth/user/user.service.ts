import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserCreate } from '../../auth/user/dtos/user.create';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  async userCreate(data: UserCreate) {
    const existing = await this.repo.findOne({ where: { login: data.login } });
    if (existing) {
      throw new ConflictException('Login already exists');
    }
    const user = this.repo.create(data);
    return this.repo.save(user);
  }

  userDelete(id: string) {
    return this.repo.delete(id);
  }
}
