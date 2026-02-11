import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TaskService } from "../services/task.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { TaskList } from "../dtos/task.list";
import { TaskCreate } from "../dtos/task.create";

@Controller("tasks")
export class TaskController {
    constructor(private readonly service: TaskService) { }


    @Get()
    @ApiOkResponse({ type: TaskList, isArray: true })
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({ type: TaskList })
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({ type: TaskCreate })
    async create(@Body() payload: TaskCreate) {
        return await this.service.create(payload)
    }

}