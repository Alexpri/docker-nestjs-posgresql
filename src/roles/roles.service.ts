import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}
  async create_role(dto: CreateRoleDto) {
    const role = await this.roleRepository.create(dto);
    return role;
  }

  async get_role_by_value(value: string) {
    const role = await this.roleRepository.findOne({ where: { value } });
    return role;
  }
}
