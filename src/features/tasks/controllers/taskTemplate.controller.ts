import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TaskCategoryService } from "../services/taskCategory.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { TaskTemplateList } from "../dtos/taskTemplate.list";
import { TaskTemplateCreate } from "../dtos/taskTemplate.create";

import { TaskTemplateUpdate } from "../dtos/taskTemplate.update";

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

    @Patch(":id")
    async update(@Param("id") id: number, @Body() payload: TaskTemplateUpdate) {
        return await this.service.update(id, payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}
