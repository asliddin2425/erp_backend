import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskCategory } from "../entities/taskCategory.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { TaskCategoryList } from "../dtos/taskCategory.list";

@Injectable()
export class TaskCategoryService {
    constructor(
        @InjectRepository(TaskCategory)
        private readonly repo: Repository<TaskCategory>,
    ) {}


    async getAll() {
        const rawTaskCategory = await this.repo.find()
        const taskCategories = plainToInstance(
            TaskCategory,
            rawTaskCategory,
            {
                excludeExtraneousValues: true,
            },
        );
        return taskCategories;
    }

    async getOne(id: number) {
        const rawTaskCategory = await this.repo.findOneBy({id})
        if(!TaskCategory) {
            throw new Error("Not found")
        }
        return plainToInstance(TaskCategoryList, rawTaskCategory, {
            excludeExtraneousValues: true,
        })
    }
}