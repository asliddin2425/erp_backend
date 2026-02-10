import { Controller, Param } from "@nestjs/common";
import { FilesService } from "../files.service";
import { Get } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { FilesList } from "../dtos/files.list";
@Controller("files")
export class FilesController {
    constructor(private readonly service: FilesService) {}


    @Get()
    @ApiOkResponse({type: FilesList, isArray: true})
    async getAll() {
        return await this.service.getAll();
    }


    @Get(":id")
    @ApiOkResponse({type: FilesList})
    async getOne(@Param("id") id: number) {
        return await this.service.getOne(id)
    }

}