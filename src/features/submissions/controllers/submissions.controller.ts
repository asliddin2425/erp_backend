import { Controller, Get, Param } from "@nestjs/common";
import { SubmssionService } from "../submissions.service";
import { ApiOkResponse } from "@nestjs/swagger";
import { SubmissionsList } from "../dtos/submissions.list";

@Controller('submissions')

export class SubmissionController {
    constructor(private readonly service: SubmssionService) {}



    @Get()
    @ApiOkResponse({type: SubmissionsList, isArray: true})
    async getAll() {
        return await this.service.getAll()
    }


    @Get(":id")
    @ApiOkResponse({type: SubmissionsList})
    async GetOne(@Param("id") id: number) {
        return await this.service.GetOne(id)
    }
}