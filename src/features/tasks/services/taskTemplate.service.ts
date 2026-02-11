import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskTemplate } from "../entities/taskTemplates.entity";
import { Repository } from "typeorm";
import { ApiOkResponse } from "@nestjs/swagger";
import { plainToInstance } from "class-transformer";
import { TaskTemplateList } from "../dtos/taskTemplate.list";
import { TaskTemplateCreate } from "../dtos/taskTemplate.create";
import { TaskTemplateUpdate } from "../dtos/taskTemplate.update";

@Injectable()
export class TaskTemplateService {
    constructor(
        @InjectRepository(TaskTemplate)
        private readonly repo: Repository<TaskTemplate>
    ) {}


    async getAll() {
        const rawTaskTemplate = await this.repo.find();
        const taskTemplates = plainToInstance(
            TaskTemplateList,
            rawTaskTemplate,
            {
                excludeExtraneousValues: true,
            },
        );
        return taskTemplates;
    }


    async getOne(id: number) {
        const rawTaskTemplate = await this.repo.findOneBy({id})
        if(!rawTaskTemplate) {
            throw new Error("Not found")
        }
        return plainToInstance(TaskTemplateList, rawTaskTemplate, {
            excludeExtraneousValues: true,
        })
    }

    async create(paylaod: TaskTemplateCreate) {
        const newTaskTemplate = this.repo.create(paylaod as TaskTemplate)
        
        await this.repo.save(newTaskTemplate)
        return plainToInstance(TaskTemplateList, newTaskTemplate, {
            excludeExtraneousValues: true,
        })
    }


    async update(id: number, payload: TaskTemplateUpdate) {
        const taskTemplates = await this.repo.findOneBy({id})
        if(!taskTemplates) {
            throw new Error("Not found")
        }
        Object.assign(
            taskTemplates,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) =>value  !== null && value !==undefined,
                ),
            ),
        );
        await this.repo.save(taskTemplates)
        return taskTemplates;
    }

    async delete(id: number) {
        const taskTemplates = await this.repo.findOneBy({id})
        if(!taskTemplates) {
            throw new Error("Not found")
        }
        return await this.repo.remove(taskTemplates)
    }


}