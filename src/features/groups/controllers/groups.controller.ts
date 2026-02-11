import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { GroupsService } from "../services/groups.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { GroupsList } from "../dtos/groups.list";
import { StudentGroupsCreate } from "../dtos/student-groups.create";
import { StudentGroupsList } from "../dtos/student-groups.list";
import { GroupsCreate } from "../dtos/groups.create";
import { GroupsUpdate } from "../dtos/groups.update";

@Controller("groups")
export class GroupController {
    constructor(private readonly service: GroupsService) {}


    @Get()
    @ApiOkResponse({type: GroupsList, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }

    @Get(":id") 
    @ApiOkResponse({type: GroupsList})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

    @Post()
    @ApiOkResponse({type: GroupsCreate}) 
    async create(@Body() payload: GroupsCreate) {
        return await this.service.create(payload)
    }

    @Patch(":id")
    async update(@Param("id") id: number, @Body() payload: GroupsUpdate) {
        return await this.service.update(id, payload)
    }


    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }
}