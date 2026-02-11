import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "../entities/task.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { TaskList } from "../dtos/task.list";
import { TaskCreate } from "../dtos/task.create";

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

}