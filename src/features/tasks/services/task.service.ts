import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "../entities/task.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { TaskList } from "../dtos/task.list";
import { TaskCreate } from "../dtos/task.create";
import { TaskUpdate } from "../dtos/task.update";

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private readonly repo: Repository<Task>
    ) { }



    async getAll() {
        const rawTask = await this.repo.find()
        const tasks = plainToInstance(
            TaskList,
            rawTask,
            {
                excludeExtraneousValues: true,
            },
        );
        return tasks;
    }

    async getOne(id: number) {
        const rawTask = await this.repo.findOneBy({ id })
        if (!rawTask) {
            throw new Error("Not found")
        }
        return plainToInstance(TaskList, rawTask, {
            excludeExtraneousValues: true,
        })
    }

    async create(payload: TaskCreate) {
        const newTask = this.repo.create(payload as Task)
        await this.repo.save(newTask)
        return plainToInstance(TaskList, newTask, {
            excludeExtraneousValues: true,
        })
    }


    async update(id: number, payload: TaskUpdate) {
        const tasks = await this.repo.findOneBy({id})
        if(!tasks) {
            throw new Error("Not found")
        }
        Object.assign(
            tasks,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) =>value  !== null && value !==undefined,
                ),
            ),
        );
        await this.repo.save(tasks)
        return tasks;
    }

    async delete(id: number) {
        const tasks = await this.repo.findOneBy({id})
        if(!tasks) {
            throw new Error("Not found")
        }

        return await this.repo.remove(tasks)
    } 


}