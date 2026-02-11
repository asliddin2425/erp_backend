import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { SubmissionService } from "../submissions.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { SubmissionsList } from "../dtos/submissions.list";
import { SubmissionCreate } from "../dtos/submissions.create";
import { SubmissionsUpdate } from "../dtos/submissions.update";

@Controller('submissions')

export class SubmissionController {
    constructor(private readonly service: SubmissionService) { }



    @Get()
    @ApiOkResponse({ type: SubmissionsList, isArray: true })
    async getAll() {
        return await this.service.getAll()
    }


    @Get(":id")
    @ApiOkResponse({ type: SubmissionsList })
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }


    @Post()
    @ApiOkResponse({type: SubmissionCreate})
    async create(@Body() payload: SubmissionCreate) {
        return await this.service.create(payload)
    }


    @Patch(":id")
    async update(@Param("id") id: number, @Body() payload: SubmissionsUpdate) {
        return await this.service.update(id, payload)
    }


    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }


}