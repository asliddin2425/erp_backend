import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Files } from "./entities/files.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { FilesList } from "./dtos/files.list";



@Injectable()
export class FilesService {
    constructor (
        @InjectRepository(Files)
        private readonly repo: Repository<Files>,
    ) {}

    async getAll() {
        const rawFiles = await this.repo.find();
        const files = plainToInstance(
            Files, 
            rawFiles,
            {
                excludeExtraneousValues: true,
            },
        )
        return files;
    }

    async getOne(id: number) {
        const rawFiles = await this.repo.findOneBy({id})
        if(!Files) {
            throw new Error("not found")
        }
        return plainToInstance(FilesList, rawFiles,{
            excludeExtraneousValues: true

        }) 
    }
}