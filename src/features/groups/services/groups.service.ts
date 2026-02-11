import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Group } from "../entities/groups.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { GroupsList } from "../dtos/groups.list";
import { GroupsCreate } from "../dtos/groups.create";
import { GroupsUpdate } from "../dtos/groups.update";

@Injectable()
export class GroupsService {
    constructor(
        @InjectRepository(Group)
        private readonly repo: Repository<Group>,
    ) {}

    async getAll() {
        const rawGroup = await  this.repo.find();
        const groups = plainToInstance(
            GroupsList,
            rawGroup,
            {
                excludeExtraneousValues: true,
            },
        );
        return groups;
    }

    async getOne(id: number) {
        const rawGroup = await this.repo.findOneBy({id})
        if(!rawGroup) {
            throw new Error("Not found")
        }
        return plainToInstance(GroupsList, rawGroup,{
            excludeExtraneousValues: true,
        });
    }

    async create(payload: GroupsCreate) {
        const newGroup = this.repo.create(payload as Group);
        await this.repo.save(newGroup)
        return plainToInstance(GroupsCreate, newGroup, {
            excludeExtraneousValues: true,
        })
    } 

    async update(id: number, payload: GroupsUpdate) {
        const groups = await this.repo.findOneBy({id})
        if(!groups) {
            throw new Error("Not found")
        }
    }
}