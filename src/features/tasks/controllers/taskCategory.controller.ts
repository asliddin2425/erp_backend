import { Controller, Get, Param } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { TaskCategoryList } from "../dtos/taskCategory.list";
import { TaskCategoryService } from "../services/taskCategory.service";


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
}