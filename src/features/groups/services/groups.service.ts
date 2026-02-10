import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Group } from "../entities/groups.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { GroupsList } from "../dtos/groups.list";

@Injectable()
export class GroupsService {
    constructor(
        @InjectRepository(Group)
        private readonly repo: Repository<Group>,
    ) {}

    async getAll() {
        const rawGroup = await  this.repo.find();
        const groups = plainToInstance(
            Group,
            rawGroup,
            {
                excludeExtraneousValues: true,
            },
        );
        return groups;
    }

    async getOne(id: number) {
        const rawGroup = await this.repo.findOneBy({id})
        if(!Group) {
            throw new Error("Not found")
        }
        return plainToInstance(GroupsList, rawGroup,{
            excludeExtraneousValues: true,
        });
    }
}