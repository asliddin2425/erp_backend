import { Body, Controller, Delete, Param, Patch } from "@nestjs/common";
import { FilesService } from "../files.service";
import { Get, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { FilesList } from "../dtos/files.list";
import { FilesCreate } from "../dtos/files.create";
import { FilesUpdate } from "../dtos/files.update";
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

    @Post()
    @ApiOkResponse({type: FilesCreate})
    async create(@Body() payload: FilesCreate) {
        return await this.service.create(payload)
    }


    @Patch(":id")
    // @ApiOkResponse({type: FilesUpdate})
    async update(@Param("id") id: number, @Body() payload: FilesUpdate) {
        return await this.service.update(id, payload)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.delete(id)
    }

    
}