import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { LessonService } from "../lesson.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { LessonCreate } from "../dtos/lesson.create";
import { LessonList } from "../dtos/lesson.list";
import { LessonUpdate } from "../dtos/lesson.update";

@Controller("lessons")
export class LessonController {
    constructor(private readonly service: LessonService) {}




    @Get()
    @ApiOkResponse({type: LessonList, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id")
    @ApiOkResponse({type: LessonList})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    } 


    @Post()
    @ApiOkResponse({type: LessonCreate}) 
    async create(@Body() payload: LessonCreate) {
        return await this.service.create(payload)
    }


    @Patch(":id")
    async update(@Param("id") id: number, @Body() payload: LessonUpdate) {
        return await this.service.update(id, payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }


}