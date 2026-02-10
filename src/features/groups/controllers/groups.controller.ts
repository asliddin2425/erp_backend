import { Controller, Get, Param } from "@nestjs/common";
import { GroupsService } from "../services/groups.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { GroupsList } from "../dtos/groups.list";

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
}