import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Lesson } from "./entities/lesson.entity";
import { Repository } from "typeorm";
import { plainToClass, plainToInstance } from "class-transformer";
import { LessonList } from "./dtos/lesson.list";

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson)
        private readonly repo: Repository<Lesson>
    ) {}




    async getAll() {
        const rawLesson = await this.repo.find()
        const lessons = plainToInstance(
            Lesson,
            rawLesson,
            {
                excludeExtraneousValues: true,
            },
        );
        return lessons;
    }

    async getOne(id: number) {
        const rawLesson = await this.repo.findOneBy({id})
        if(!Lesson) {
            throw new Error("Not found")
        }
        return plainToInstance(LessonList, rawLesson, {
            excludeExtraneousValues: true,
        });
    }
}