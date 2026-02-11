import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { TaskCategoryList } from "../dtos/taskCategory.list";
import { TaskCategoryService } from "../services/taskCategory.service";
import { TaskCategoryCreate } from "../dtos/taskCategory.create";
import { TaskCategoryUpdate } from "../dtos/taskCategory.update";


@Controller("taskCategory")
export class TaskCategoryController {
    constructor(private readonly service: TaskCategoryService) {}


    @Get()
    @ApiOkResponse({type: TaskCategoryList, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }


    @Get(":id") 
    @ApiOkResponse({type: TaskCategoryList})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: TaskCategoryCreate})
    async create(@Body() payload: TaskCategoryCreate) {
        return await this.service.create(payload)
    }

    @Patch(":id")
    async update(@Param("id") id: number, @Body() payload: TaskCategoryUpdate) {
        return await this.service.update(id, payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id )
    }
}