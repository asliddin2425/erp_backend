import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { StudentGroupsList } from "../dtos/student-groups.list";
import { StudentGroupsService } from "../services/student-groups.service";
import { StudentGroupsCreate } from "../dtos/student-groups.create";
import { StudentGroupsUpdate } from "../dtos/student-groups.update";

@Controller("student-groups")
export class StudentGroupsController {
    constructor(private readonly service: StudentGroupsService) {}




    @Get()
    @ApiOkResponse({type: StudentGroupsList, isArray: true})
    async getAll() {
        return await this.service.getAll();
    }

    @Get(":id")
    @ApiOkResponse({type: StudentGroupsList})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: StudentGroupsCreate})
    async create(@Body() payload: StudentGroupsCreate) {
        return await this.service.create(payload)
    }


    @Patch()
    async update(@Param("id") id: number, @Body() payload: StudentGroupsUpdate) {
        return await this.service.update(id, payload)
    }
}