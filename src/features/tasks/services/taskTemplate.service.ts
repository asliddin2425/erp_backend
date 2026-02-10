import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskTemplate } from "../entities/taskTemplates.entity";
import { Repository } from "typeorm";
import { ApiOkResponse } from "@nestjs/swagger";
import { plainToInstance } from "class-transformer";
import { TaskTemplateList } from "../dtos/taskTemplate.list";

@Injectable()
export class TaskTemplateService {
    constructor(
        @InjectRepository(TaskTemplate)
        private readonly repo: Repository<TaskTemplate>
    ) {}


    async getAll() {
        const rawTaskTemplate = await this.repo.find();
        const taskTemplates = plainToInstance(
            TaskTemplate,
            rawTaskTemplate,
            {
                excludeExtraneousValues: true,
            },
        );
        return taskTemplates;
    }


    async getOne(id: number) {
        const rawTaskTemplate = await this.repo.findOneBy({id})
        if(!TaskTemplate) {
            throw new Error("Not found")
        }
        return plainToInstance(TaskTemplateList, rawTaskTemplate, {
            excludeExtraneousValues: true,
        })
    }
}