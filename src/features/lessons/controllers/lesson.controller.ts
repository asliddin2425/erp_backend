import { Controller, Get, Param } from "@nestjs/common";
import { LessonService } from "../lesson.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { LessonCreate } from "../dtos/lesson.create";
import { LessonList } from "../dtos/lesson.list";

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
}