import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Files } from "./entities/files.entity";
import { Repository } from "typeorm";
import { plainToInstance } from "class-transformer";
import { FilesList } from "./dtos/files.list";
import { FilesCreate } from "./dtos/files.create";
import { FilesUpdate } from "./dtos/files.update";



@Injectable()
export class FilesService {
    constructor (
        @InjectRepository(Files)
        private readonly repo: Repository<Files>,
    ) {}

    async getAll() {
        const rawFiles = await this.repo.find();
        const files = plainToInstance(
            FilesList, 
            rawFiles,
            {
                excludeExtraneousValues: true,
            },
        )
        return files;
    }

    async getOne(id: number) {
        const rawFiles = await this.repo.findOneBy({id})
        if(!rawFiles) {
            throw new Error("not found")
        }
        return plainToInstance(FilesList, rawFiles,{
            excludeExtraneousValues: true

        }) 
    }


    async create(payload: FilesCreate) {
        const newFiles =  this.repo.create(payload as Files);
        await this.repo.save(newFiles)
        return plainToInstance(FilesList, newFiles, {
            excludeExtraneousValues: true,
        })
    }
  

    async update(id: number, payload: FilesUpdate) {
        const files = await this.repo.findOneBy({id});
        if(!files) {
            throw new NotFoundException();
        }

        Object.assign(
            files,
            Object.fromEntries(
                Object.entries(payload).filter(
                    ([key, value]) =>value  !== null && value !==undefined,
                ),
            ),
        );
        await this.repo.save(files)
        return files;
    }


    async delete(id: number) {
        const files = await this.repo.findOneBy({id})
        if(!files) {
            throw new Error("Not found")
        }
        return await this.repo.remove(files)
    }
}