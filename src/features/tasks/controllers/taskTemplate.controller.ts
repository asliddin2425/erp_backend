import { Controller, Get, Param } from "@nestjs/common";
import { TaskCategoryService } from "../services/taskCategory.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { TaskTemplateList } from "../dtos/taskTemplate.list";

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

}
