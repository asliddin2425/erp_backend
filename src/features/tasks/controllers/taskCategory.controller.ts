import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { TaskCategoryList } from "../dtos/taskCategory.list";
import { TaskCategoryService } from "../services/taskCategory.service";
import { TaskCategoryCreate } from "../dtos/taskCategory.create";


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
}