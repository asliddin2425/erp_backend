import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskCategory } from "../entities/taskCategory.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { TaskCategoryList } from "../dtos/taskCategory.list";
import { TaskCategoryCreate } from "../dtos/taskCategory.create";
import { TaskCategoryUpdate } from "../dtos/taskCategory.update";

@Injectable()
export class TaskCategoryService {
    constructor(
        @InjectRepository(TaskCategory)
        private readonly repo: Repository<TaskCategory>,
    ) {}


    async getAll() {
        const rawTaskCategory = await this.repo.find()
        const taskCategories = plainToInstance(
            TaskCategoryList,
            rawTaskCategory,
            {
                excludeExtraneousValues: true,
            },
        );
        return taskCategories;
    }

    async getOne(id: number) {
        const rawTaskCategory = await this.repo.findOneBy({id})
        if(!rawTaskCategory) {
            throw new Error("Not found")
        }
        return plainToInstance(TaskCategoryList, rawTaskCategory, {
            excludeExtraneousValues: true,
        })
    }

    async create(payload: TaskCategoryCreate) {
        const newTaskCategory = this.repo.create(payload as TaskCategory)
        await this.repo.save(newTaskCategory);
        return plainToInstance(TaskCategoryList, newTaskCategory, {
            excludeExtraneousValues: true,
        })
    }


    async update(id: number, payload: TaskCategoryUpdate) {
        const taskCategory = await this.repo.findOneBy({id})
        if(!taskCategory) {
            throw new Error("Not found")
        }
        Object.assign(
            taskCategory,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) =>value  !== null && value !==undefined,
                ),
            ),
        );
        await this.repo.save(taskCategory)
        return taskCategory;
    }

    async delete(id: number) {
        const taskCategory = await this.repo.findOneBy({id})
        if(!taskCategory) {
            throw new Error("Not found")
        }
        return await this.repo.remove(taskCategory)
    }
    

}