import { Controller, Get, Param } from "@nestjs/common";
import { TaskService } from "../services/task.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { TaskCreate } from "../dtos/task.create";
import { TaskList } from "../dtos/task.list";
import { TaskTemplate } from "../entities/taskTemplates.entity";

@Controller("tasks")
export class TaskController {
    constructor(private readonly service: TaskService) {}


    @Get()
    @ApiOkResponse({type: TaskList, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: TaskTemplate})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }
}