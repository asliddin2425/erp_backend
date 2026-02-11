import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TaskCategoryService } from "../services/taskCategory.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { TaskTemplateList } from "../dtos/taskTemplate.list";
import { TaskTemplateCreate } from "../dtos/taskTemplate.create";
import { retry } from "rxjs";

@Controller("taskTemplate")
export class TaskTemplateController {
    constructor(
        private readonly service: TaskCategoryService
    ) {}

    @Get()
    @ApiOkResponse({type: TaskTemplateList, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: TaskTemplateList})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: TaskTemplateCreate})
    async create(@Body() paylaod: TaskTemplateCreate) {
        return await this.service.create(paylaod)
    }
}
