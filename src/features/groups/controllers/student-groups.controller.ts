import { Controller, Get, Param } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { StudentGroupsList } from "../dtos/student-groups.list";
import { StudentGroupsService } from "../services/student-groups.service";

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
        return await this.service.GetOne(id)
    }
}